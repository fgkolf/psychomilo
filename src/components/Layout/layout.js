import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import Hero from './hero';

const useHero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
        name
        title
        company
        shortBio {
          shortBio
        }
      }
    }
  `);
  return data.contentfulPerson;
};

const Layout = ({ children }) => {
  const hero = useHero();
  return (
    <div className="wrapper">
      <div className="hero">
        <Navigation />
        <Hero data={hero} />
      </div>
      <div className="transition-fade-in">{children}</div>
      <BackToTop />
    </div>
  );
};

export default Layout;
