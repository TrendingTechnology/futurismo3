import React from 'react'

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(
    <script
      type="text/javascript"
      src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b6d7b1eced93fe6"
    />
  )
}
