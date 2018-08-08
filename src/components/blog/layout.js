import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'
import Sidebar from './sidebar'

import StyledPoole from './StyledPoole'
import StyledHyde from './StyledHyde'
import StyledBlog from './StyledBlog'

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
      <StyledBlog>
        <StyledPoole>
          <StyledHyde>
            <div className="theme-base-01">
              <Sidebar
                title={data.site.siteMetadata.title}
                description={data.site.siteMetadata.description}
              />
              <div className="content container">{children}</div>
            </div>
          </StyledHyde>
        </StyledPoole>
      </StyledBlog>
    )}
  />
)
