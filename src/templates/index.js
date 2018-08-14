import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/blog/layout'
import SEO from '../components/blog/SEO'

const NavLink = props => {
  const { test, url, text } = props
  if (!test) {
    return (
      <Link to={url} className="pagination-item">
        {text}
      </Link>
    )
  }
  return <span className="pagination-item">{text}</span>
}

export default ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div>
      <SEO />
      <Layout>
        <div className="posts">
          {group.map(({ node }) => (
            <div className="post">
              <h1 className="post-title">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h1>
              <span className="post-date">{node.frontmatter.date}</span>
              {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
              <p>{node.frontmatter.description}</p>
            </div>
          ))}
          <div className="pagination">
            <NavLink test={first} url={previousUrl} text="Prev" />
            <NavLink test={last} url={nextUrl} text="Next" />
          </div>
        </div>
      </Layout>
    </div>
  )
}
