import React, { useState } from 'react';
import { Link } from 'gatsby';
import wave from '../../../static/images/wave.svg';
import logo from '../../../static/images/logo.svg';
import Overlay from '../overlay';

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav((prevShow) => !prevShow);
  };

  return (
    <div>
      <div className="burger" aria-label="Menu" role="button" aria-controls="navigation" tabIndex={0} onClick={toggle}>
        <span />
        <span />
        <span />
      </div>
      <Overlay visible={showNav} toggle={toggle}>
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
        </div>
      </Overlay>
    </div>
  );
};

export default Navigation;
