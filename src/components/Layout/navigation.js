import React from 'react';
import { Link } from 'gatsby';

const NavBurger = ({ toggle }) => (
  <button className="nav-burger" type="button" onClick={toggle}>
    <div className="hamburger hamburger--collapse" aria-label="Menu" role="button" aria-controls="navigation">
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  </button>
);

// TODO: THIS IS HIDDEN
const Navigation = ({ toggle, pathname }) => (
  <div style={{ display: 'none' }}>
    <NavBurger toggle={toggle} />
    <nav>
      <ul>
        <li className={`nav ${pathname === '/' ? 'nav-current' : ''}`}>
          <Link to="/">Αρχική</Link>
        </li>
        <li className={`nav ${pathname.startsWith('/blog') ? 'nav-current' : ''}`}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={`nav ${pathname.startsWith('/about') ? 'nav-current' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`nav ${pathname.startsWith('/contact') ? 'nav-current' : ''}`}>
          <Link to="/contact">Επικοινωνία</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
