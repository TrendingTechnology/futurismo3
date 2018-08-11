import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Layout from '../components/blog/layout'
import PostFooter from '../components/blog/PostFooter'

const _ = require('lodash')

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

const StyledTOC = styled.div`
  ul {
    background: #dadada;
    border-radius: 8px;
    box-shadow: 0px 0px 0px silver;
    padding: 0.5em 0.5em 0.5em 2em;
  }
`

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
          <StyledTOC
            dangerouslySetInnerHTML={{ __html: post.node.tableOfContents }}
          />
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <PostFooter post={post} prev={prev} next={next} />
        </div>
      </Layout>
    </div>
  )
}
