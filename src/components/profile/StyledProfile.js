import styled from 'styled-components'

const StyledProfile = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    /* background: #373a47; */
    background: #6ec0bc;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    /* color: #b8b7ad; */
    color: #373a47;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .contact-content a:link {
    color: #fff;
  }
  .contact-content a:visited {
    color: #fff;
  }
  .contact-content a:hover {
    color: #fff;
  }
  .contact-content a:active {
    color: #fff;
  }

  .profile {
    text-align: left !important;
    padding-bottom: 2rem;
  }

  .profile img {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    .profile-content {
      padding: 10px;
    }
  }

  footer {
    text-align: center;
  }

  /*
 * Global resets
 *
 * Update the foundational and global aspects of the page.
 */

  html {
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  }
  @media (min-width: 48em) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 58em) {
    html {
      font-size: 20px;
    }
  }

  /*
 * Sidebar
 *
 * Flexible banner for housing site name, intro, and "footer" content. Starts
 * out above content in mobile and later moves to the side with wider viewports.
 */

  .sidebar {
    text-align: center;
    padding: 2rem 1rem;
    color: rgba(255, 255, 255, 0.5);
    background-color: #202020;
  }
  @media (min-width: 48em) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 18rem;
      text-align: left;
    }
  }

  /* Sidebar links */
  .sidebar a {
    color: #fff;
  }

  /* About section */
  .sidebar-about h1 {
    color: #fff;
    margin-top: 0;
    font-family: 'Abril Fatface', serif;
    font-size: 2.25rem;
  }

  /* Sidebar nav */
  .sidebar-nav {
    margin-bottom: 1rem;
  }
  .sidebar-nav-item {
    display: block;
    line-height: 1.75;
  }
  a.sidebar-nav-item:hover,
  a.sidebar-nav-item:focus {
    text-decoration: underline;
  }
  .sidebar-nav-item.active {
    font-weight: bold;
  }

  @media (min-width: 48em) {
    .sidebar-sticky {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
    }
  }

  .content {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 48em) {
    .content {
      max-width: 38rem;
      margin-left: 20rem;
      margin-right: 2rem;
    }
  }

  @media (min-width: 64em) {
    .content {
      margin-left: 22rem;
      margin-right: 4rem;
    }
  }

  @media (min-width: 48em) {
    .layout-reverse .sidebar {
      left: auto;
      right: 0;
    }
    .layout-reverse .content {
      margin-left: 2rem;
      margin-right: 20rem;
    }
  }

  @media (min-width: 64em) {
    .layout-reverse .content {
      margin-left: 4rem;
      margin-right: 22rem;
    }
  }
`
export default StyledProfile
