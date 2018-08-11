import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'
import Sidebar from './sidebar'

import StyledPoole from './StyledPoole'
import StyledHyde from './StyledHyde'

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
      <div>
        <StyledHyde>
          <Sidebar
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
          />
          <StyledPoole>
            <div className="content container">{children}</div>
          </StyledPoole>
        </StyledHyde>
      </div>
    )}
  />
)
