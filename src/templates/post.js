import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/blog/layout'

const _ = require('lodash')

const RelatedPost = ({ type, slug, title, date }) => (
  <li>
    <h3>
      {type}:{' '}
      <Link to={slug}>
        {title} <small>{date}</small>
      </Link>
    </h3>
  </li>
)

function Tags(props) {
  if (!props.tags) {
    return null
  }

  return props.tags.map(tag => (
    <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
  ))
}

function Thumbnail(props) {
  if (!props.src) {
    return null
  }
  return <img src={props.src} alt="thumbnail" />
}

export default ({ pageContext }) => {
  const { post, prev, next } = pageContext
  return (
    <div>
      <Helmet title={`${post.node.frontmatter.title}`} />
      <Layout>
        <div>
          <h1 className="post-title">{post.node.frontmatter.title}</h1>
          <span className="post-date">{post.node.frontmatter.date}</span>
          <Tags tags={post.node.frontmatter.tags} />
          <Thumbnail src={post.node.frontmatter.image} />
          <p>
            <strong>Table of Contents</strong>
          </p>
          <div
            className="table-of-contents"
            dangerouslySetInnerHTML={{ __html: post.node.tableOfContents }}
          />
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <div className="related">
            <ul className="related-posts">
              {prev ? (
                <RelatedPost
                  type="Previous"
                  slug={prev.fields.slug}
                  title={prev.frontmatter.title}
                  date={prev.frontmatter.date}
                />
              ) : null}
              {next ? (
                <RelatedPost
                  type="Next"
                  slug={next.fields.slug}
                  title={next.frontmatter.title}
                  date={next.frontmatter.date}
                />
              ) : null}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
