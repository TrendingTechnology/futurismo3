import React from 'react'
import styled from 'styled-components'

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
    <StyledPostAuthorAvator
      src="https://res.cloudinary.com/tsu-nera/image/upload/ar_1:1,b_rgb:ffffff,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_100/v1533897547/futurismo/logo.jpg"
      alt="avator"
    />
    <StyledPostAuthorBox>
      <p>
        <strong>tsu-nera</strong>
        <a href="/profile" alt="profile">
          (プロフィール詳細)
        </a>
      </p>
      IT企業の組込みエンジニア→18年6月退職→Web未経験からフリーランスWebエンジニア目指して勉強中の31歳。Rails/React/Java/Python/C言語/Linux。今日も一日、がんばるぞい。<br />
    </StyledPostAuthorBox>
  </StyledPostAuthor>
)

export default PostAuthor
