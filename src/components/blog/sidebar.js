import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

const ListLink = props => {
  const { to, children } = props
  return (
    <Link to={to} className="sidebar-nav-item">
      {children}
    </Link>
  )
}

const ListLinkNoOpener = props => {
  const { to, children } = props
  return (
    <a
      href={to}
      className="sidebar-nav-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default ({ title, description }) => (
  // TODO 丸い写真を入れる

  <div className="sidebar">
    <div className="container sidebar-sticky">
      <div className="sidebar-about">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <p className="lead">{description}</p>
      </div>

      <nav className="sidebar-nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/profile">Profile</ListLink>
        <ListLink to="/search">Search</ListLink>
        <ListLink to="/tags">Tags</ListLink>
        <ListLinkNoOpener to="https://twitter.com/tsu_nera">
          Twitter
        </ListLinkNoOpener>
        <ListLinkNoOpener to="https://github.com/tsu-nera">
          GitHub
        </ListLinkNoOpener>
      </nav>

      <p>&copy; {moment().format('YYYY')}. All rights reserved.</p>
    </div>
  </div>
)
