import React from 'react'
import Layout from '../components/blog/layout'
import SEO from '../components/blog/SEO'

export default ({ pageContext }) => {
  const { page } = pageContext.edges.node

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
