import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import Slider from 'react-sliding-pane'
import Modal from 'react-modal'
import Search from './Search'
import 'react-sliding-pane/dist/react-sliding-pane.css'

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

class SideBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    Modal.setAppElement(this.el)
  }

  openSlider() {
    this.setState({
      isOpen: true,
    })
  }

  closeSlider() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { title, description } = this.props

    return (
      <div>
        <Slider
          title="Search"
          isOpen={this.state.isOpen}
          onRequestClose={() => this.closeSlider()}
        >
          <Search />
        </Slider>
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
              <a href="#" onClick={() => this.openSlider()}>
                Search
              </a>
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
      </div>
    )
  }
}

export default SideBar
