import React from 'react';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import Hero from './hero';
import CustomHelmet from './custom-helmet';
import Footer from './footer';

const Layout = ({ children, title }) => (
  <div className="wrapper">
    <CustomHelmet title={title} />
    <div className="hero">
      <Navigation />
      <Hero />
    </div>
    <div className="content fade-in">{children}</div>
    <Footer />
    <BackToTop />
  </div>
);

export default Layout;
