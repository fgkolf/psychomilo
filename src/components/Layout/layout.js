import React from 'react';
import { Link } from 'gatsby';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import useSiteTitle from '../../utils/useSiteTitle';
import Hero from '../hero';

const Layout = ({ children, location, author }) => {
  const siteTitle = useSiteTitle();
  const [toggleNav, setToggleNav] = React.useState(false);
  const toggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="wrapper">
      <aside>
        <Navigation toggle={toggle} pathname={location.pathname} />
        <Hero data={author.node} />
      </aside>
      <div>{children}</div>
      <BackToTop />
      <footer>
        &copy; {new Date().getFullYear()} <Link to="/">{siteTitle}</Link>
      </footer>
    </div>
  );
};

export default Layout;
