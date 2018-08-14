import React from 'react'
import styled from 'styled-components'
import config from '../../../config/BlogConfig'

const StyledPostAuthor = styled.div`
  margin: 3em 0 0;
  padding: 3em 0 0;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`

const StyledPostAuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  align-items: center;
`

const StyledPostAuthorAvator = styled.img`
  margin: 0 1em 1em;
  border-radius: 75% 65%;
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  flex-shrink: 0;
  @media (min-width: 640px) {
    margin: 0 1em 0;
  }
`

const PostAuthor = () => (
  <StyledPostAuthor>
    <StyledPostAuthorAvator src={config.userAvatar} alt="avator" />
    <StyledPostAuthorBox>
      <p>
        <strong>{config.userName}</strong>
        <a href="/profile" alt="profile">
          (プロフィール詳細)
        </a>
      </p>
      {config.userDescription}
      <br />
    </StyledPostAuthorBox>
  </StyledPostAuthor>
)

export default PostAuthor
