import React from 'react';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import Hero from './hero';
import CustomHelmet from './custom-helmet';

const Layout = ({ children, title }) => (
  <div className="wrapper">
    <CustomHelmet title={title} />
    <div className="hero">
      <Navigation />
      <Hero />
    </div>
    <div className="content transition-fade-in">{children}</div>
    <footer>psychomilo 2020</footer>
    <BackToTop />
  </div>
);

export default Layout;
