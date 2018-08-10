import React from 'react'
import Link from 'gatsby-link'
import DisqusEmbed from './Disqus'
import PostShare from './PostShare'

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

const PostFooter = ({ post, prev, next }) => (
  <div className="post-footer">
    <PostShare post={post} />
    <DisqusEmbed
      identifier={post.node.id}
      title={post.node.frontmatter.title}
    />
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
)

export default PostFooter
