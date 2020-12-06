import React from 'react';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import Hero from './hero';

const Layout = ({ children }) => (
  <div className="wrapper">
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
