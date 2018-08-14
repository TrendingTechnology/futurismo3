import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'
import { HatenabookmarkButton } from 'react-social-sharebuttons'
import styled from 'styled-components'
import config from '../../../config/BlogConfig'

const StyledPostShare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0 0;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const StyledPostShareLabel = styled.span`
  font-size: 1.2em;
  margin: 0 1em 1em;
  @media (min-width: 640px) {
    margin: 0 1em;
  }
`

const StyledPostShareLink = styled.div`
  display: flex;
  flex-direction: row;
  .SocialMediaShareButton {
    margin: 0 0.8em;
    cursor: pointer;
  }
`

const PostShare = ({ post }) => {
  const { title } = post.node.frontmatter
  const { slug } = post.node.fields
  const url = `${config.siteUrl}${slug}`
  const iconSize = 36
  const filter = count => (count > 0 ? count : '')

  return (
    <StyledPostShare>
      <StyledPostShareLabel>SHARE</StyledPostShareLabel>
      <StyledPostShareLink>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          quote={title}
          aria-label="Facebook share"
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <HatenabookmarkButton url={url} />
      </StyledPostShareLink>
    </StyledPostShare>
  )
}

export default PostShare
