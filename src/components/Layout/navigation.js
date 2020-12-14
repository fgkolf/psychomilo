import React, { useState } from 'react';
import { Link } from 'gatsby';
import animateHeroImage from '../../utils/helpers/animateHeroImage';
import Overlay from '../overlay';

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    animateHeroImage();
    setShowNav((prevShow) => !prevShow);
  };

  const navigate = () => {
    toggle();
    document.querySelector('html').style.overflowY = 'visible';
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
                <Link onClick={navigate} to="/">
                  ΑΡΧΙΚΗ
                </Link>
              </li>
              <li>
                <Link onClick={navigate} to="/blog">
                  BLOG
                </Link>
              </li>
              <li>
                <Link onClick={navigate} to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link onClick={navigate} to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Overlay>
    </div>
  );
};

export default Navigation;
