import React from 'react'
import Disqus from 'disqus-react'
import styled from 'styled-components'
import config from '../../../config/BlogConfig'

const SytledDisqus = styled.div`
  margin: 3em 0 0;
  padding: 3em 0 0;
  border-top: 1px solid #ddd;
`

const DisqusComment = ({ identifier, title }) => {
  const disqusShortname = config.disqusShortname
  const disqusConfig = {
    identifier,
    title,
  }

  return (
    <SytledDisqus>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </SytledDisqus>
  )
}

export default DisqusComment
