import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import wave from '../../../static/images/wave.svg';
import logo from '../../../static/images/logo.svg';

const Navigation = ({ pathname }) => {
  const [showNav, setShowNav] = React.useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (showNav) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'visible';
    }
  }, [showNav]);

  const toggle = () => {
    setShowNav((prevShow) => !prevShow);
  };

  if (!showNav) {
    return (
      <div className="burger" aria-label="Menu" role="button" aria-controls="navigation" tabIndex={0} onClick={toggle}>
        <span />
        <span />
        <span />
      </div>
    );
  }
  return (
    <div className="overlay navigation">
      <nav>
        <ul>
          <li className={`nav ${pathname === '/' ? 'nav-current' : ''}`}>
            <Link to="/">ΑΡΧΙΚΗ</Link>
          </li>
          <li className={`nav ${pathname.startsWith('/blog') ? 'nav-current' : ''}`}>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className={`nav ${pathname.startsWith('/about') ? 'nav-current' : ''}`}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={`nav ${pathname.startsWith('/contact') ? 'nav-current' : ''}`}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
      <img className="site-logo" src={logo} alt="logo" />
      <button type="button" onClick={toggle} className="close">
        Close
      </button>
    </div>
  );
};

export default Navigation;
