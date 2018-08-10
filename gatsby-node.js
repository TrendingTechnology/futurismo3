const createPaginatedPages = require('gatsby-paginate')
const path = require('path')
const _ = require('lodash')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {
                frontmatter: { type: { ne: "page" }, type: { ne: "profile" } }
              }
            ) {
              edges {
                node {
                  id
                  tableOfContents
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    draft
                    image
                    tags
                  }
                  excerpt
                  html
                }
              }
            }
            pages: allMarkdownRemark(
              filter: {
                frontmatter: { draft: { ne: true }, type: { eq: "page" } }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                  }
                  excerpt
                }
              }
            }
            profiles: allMarkdownRemark(
              filter: {
                frontmatter: { draft: { ne: true }, type: { eq: "profile" } }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    name
                    thumbnail {
                      childImageSharp {
                        fluid(maxWidth: 630) {
                          base64
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
                  html
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result)
          reject(result.errors)
        }

        const posts = result.data.posts.edges
        const pages = result.data.pages.edges
        const profiles = result.data.profiles.edges

        _.each(pages, page => {
          createPage({
            path: page.node.fields.slug,
            component: path.resolve('src/templates/page.js'),
            context: {
              slug: page.node.fields.slug,
            },
          })
        })

        _.each(profiles, profile => {
          createPage({
            path: profile.node.fields.slug,
            component: path.resolve('src/templates/profile.js'),
            context: {
              profile,
            },
          })
        })

        let allowedPosts = posts
        if (process.env.NODE_ENV === 'development') {
          allowedPosts = posts.filter(post => post.node.frontmatter.draft)
        } else {
          allowedPosts = posts.filter(post => !post.node.frontmatter.draft)
        }

        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(allowedPosts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: path.resolve('src/templates/tags.js'),
            context: {
              tag,
            },
          })
        })

        _.each(allowedPosts, (post, index) => {
          const prev =
            index === allowedPosts.length - 1
              ? null
              : allowedPosts[index + 1].node
          const next = index === 0 ? null : allowedPosts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: path.resolve('src/templates/post.js'),
            context: {
              post,
              prev,
              next,
            },
          })

          createPaginatedPages({
            edges: allowedPosts,
            createPage,
            pageTemplate: 'src/templates/index.js',
            pageLength: 15,
            pathPrefix: '',
            context: {
              index,
              prev,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const year = new Date(node.frontmatter.date).getFullYear().toString()
    let value = createFilePath({ node, getNode, basePath: year })
    if (node.frontmatter.url) {
      value = node.frontmatter.url
      value = value.replace('=', '')
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
