import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ toggleNav, setToggleNav, pathname }) => (
  <React.Fragment>
    <button
      className="nav-burger"
      type="button"
      onClick={() => setToggleNav(!toggleNav)}
    >
      <div
        className="hamburger hamburger--collapse"
        aria-label="Menu"
        role="button"
        aria-controls="navigation"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"/>
        </div>
      </div>
    </button>
    <nav className="site-head-left">
      <ul className="nav">
        <li className={`nav ${pathname==='/' ? 'nav-current' : ''}`}>
          <Link to="/">Αρχική</Link>
        </li>
        <li className={`nav ${pathname.startsWith('/blog') ? 'nav-current' : ''}`}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
)

export default Navigation
