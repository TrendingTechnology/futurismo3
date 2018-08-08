import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'
import Sidebar from './sidebar'

import '../../css/blog/poole.css'
import '../../css/blog/hyde.css'
import '../../css/blog/blog.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className="theme-base-01">
        <Sidebar
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <div className="content container">{children}</div>
      </div>
    )}
  />
)
