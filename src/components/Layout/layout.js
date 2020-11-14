import React from 'react';
import { Link } from 'gatsby';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import useSiteTitle from '../../utils/useSiteTitle';

const Layout = ({ children, location }) => {
  const siteTitle = useSiteTitle();
  const [toggleNav, setToggleNav] = React.useState(false);
  const toggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <Navigation toggle={toggle} pathname={location.pathname}>
            <div className="site-head-center">
              <Link className="site-head-logo" to="/">
                {siteTitle}
              </Link>
            </div>
          </Navigation>
        </div>
      </header>
      <div className="transition-fade">{children}</div>
      <BackToTop />
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to="/">{siteTitle}</Link>
      </footer>
    </div>
  );
};

export default Layout;
