import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slide-out'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Layout from '../components/blog/layout'
import PostFooter from '../components/blog/PostFooter'
// import StyledSlider from '../components/blog/StyledSlider'
import SEO from '../components/blog/SEO'

import 'react-slide-out/lib/index.css'

const _ = require('lodash')

const StyledTags = styled.div`
  .tags {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .tag {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    transition: color 0.2s;
  }
`

function Tags(props) {
  if (!props.tags) {
    return null
  }

  return props.tags.map(tag => (
    <li className="tag">
      <Link
        to={`/tags/${_.kebabCase(tag)}`}
        style={{
          color: 'black',
        }}
      >
        {tag}
      </Link>
    </li>
  ))
}

function Thumbnail(props) {
  if (!props.src) {
    return null
  }
  return <img src={props.src} alt="thumbnail" />
}

const StyledTOC = styled.div`
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #aaa;
  display: table;
  font-size: 95%;
  margin-bottom: 1em;
  padding: 20px;
  width: auto;
  .toc-title {
    font-weight: 700;
    text-align: center;
  }
  li,
  ul,
  ul li {
    list-style: outside none none;
    padding: 0;
  }
`

export default ({ pageContext }) => {
  const { post, prev, next } = pageContext
  return (
    <div>
      <SEO data={post.node} />
      <MediaQuery query="(min-width: 1400px)">
        {matches =>
          matches ? (
            <Slider
              foldMode
              isFolded
              foldWidth="300px"
              title="Table of Contents"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: post.node.tableOfContents,
                }}
              />
            </Slider>
          ) : (
            <div />
          )
        }
      </MediaQuery>
      <Layout>
        <div>
          <h1 className="post-title">{post.node.frontmatter.title}</h1>
          <span className="post-date">{post.node.frontmatter.date}</span>
          <StyledTags>
            <ul className="tags">
              <Tags tags={post.node.frontmatter.tags} />
            </ul>
          </StyledTags>
          <Thumbnail src={post.node.frontmatter.image} />
          <MediaQuery query="(max-width: 1400px)">
            {matches =>
              matches ? (
                <StyledTOC>
                  <p className="toc-title">Table of Contents</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.node.tableOfContents,
                    }}
                  />
                </StyledTOC>
              ) : (
                <div />
              )
            }
          </MediaQuery>
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <PostFooter post={post} prev={prev} next={next} />
        </div>
      </Layout>
    </div>
  )
}
