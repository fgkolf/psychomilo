import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import wave from '../../../static/images/wave.svg';
import logo from '../../../static/images/logo.svg';

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

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
    <div className="overlay transition-slide-right">
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link onClick={toggle} to="/">
                ΑΡΧΙΚΗ
              </Link>
            </li>
            <li>
              <Link onClick={toggle} to="/blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link onClick={toggle} to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link onClick={toggle} to="/contact">
                CONTACT
              </Link>
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
    </div>
  );
};

export default Navigation;
