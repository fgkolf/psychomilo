import React from 'react';
import Menu from './Menu';
import BackToTop from './back-to-top';
import Hero from './Hero/hero';
import CustomHelmet from './custom-helmet';
import Footer from './footer';
import { OverlayProvider } from './Menu/overlay-store';

const Layout = ({ children, title }) => (
  <OverlayProvider>
    <div className="wrapper">
      <CustomHelmet title={title} />
      <div className="hero">
        <Menu />
        <Hero />
      </div>
      <div className="content fade-in">{children}</div>
      <Footer />
      <BackToTop />
    </div>
  </OverlayProvider>
);

export default Layout;
