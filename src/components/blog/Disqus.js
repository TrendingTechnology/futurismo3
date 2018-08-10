import React from 'react'
import Disqus from 'disqus-react'

const DisqusComment = ({ identifier, title }) => {
  const disqusShortname = 'futurismo'
  const disqusConfig = {
    identifier,
    title,
  }

  return (
    <div className="disqus">
      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig} />
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComment
