import React from 'react'
import { Link } from 'gatsby'

export default ({ toggleNav, setToggleNav }) => (
  <React.Fragment>
    <a
      className="nav-burger"
      href={`#`}
      onClick={() => setToggleNav(!toggleNav)}
    >
      <div
        className="hamburger hamburger--collapse" // todo this is broken, not shown in mobile view
        aria-label="Menu"
        role="button"
        aria-controls="navigation"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"/>
        </div>
      </div>
    </a>
    <nav id="swup" className="site-head-left">
      <ul className="nav" role="menu">
        <li className="nav-home nav-current" role="menuitem">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-about" role="menuitem">
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
)
