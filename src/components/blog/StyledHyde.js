import styled from 'styled-components'

const StyledHyde = styled.div`
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

  body {
    color: #515151;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: #268bd2;
    text-decoration: none;
  }
  a strong {
    color: inherit;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
    color: #717171;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.25;
    color: #313131;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  /* Body text */
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

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
`
export default StyledHyde
