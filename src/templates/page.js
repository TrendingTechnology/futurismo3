import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/blog/layout'
import SEO from '../components/blog/SEO'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <div>
      <SEO data={page} />
      <Layout>
        <div>
          <h1 className="page-title">{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`
