import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import animateHeroImage from '../../../utils/helpers/animateHeroImage';
import Overlay from './overlay';
import Burger from './burger';
import { OverlayContext } from './overlay-store';
import ContactForm from '../../Contact/contact-form';
import ensureScrollActive from '../../../utils/helpers/ensureScrollActive';
import Social from '../social';

const Navigation = () => {
  const { overlay, setOverlay } = useContext(OverlayContext);
  const [checked, setChecked] = useState(false);

  const toggle = (e) => {
    if (e.target.checked) {
      setOverlay({ show: true, flavor: 'navigation' });
    } else {
      setOverlay((prevShow) => ({ show: !prevShow, flavor: prevShow.flavor }));
    }
  };

  useEffect(() => {
    if (overlay.initial) return;

    setChecked(overlay.show);
    animateHeroImage();
    const html = document.querySelector('html');
    if (overlay.show) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = 'visible';
    }
  }, [overlay]);

  const navigate = () => {
    toggle({ target: { checked: false } });
    ensureScrollActive();
  };

  return (
    <>
      <Burger onChange={toggle} checked={checked} />
      <Overlay overlay={overlay}>
        {overlay.flavor === 'navigation' && (
          <div className="navigation">
            <nav>
              <ul className="nav-list">
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
              <Social />
            </nav>
          </div>
        )}
        {overlay.flavor === 'scheduler' && (
          <div className="scheduler">
            <h1>Κλείσε ραντεβού</h1>
            <ContactForm fromScheduler />
          </div>
        )}
      </Overlay>
    </>
  );
};

export default Navigation;
