import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import useSiteTitle from '../../utils/helpers/useSiteTitle';
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
        heroImage: image {
          fluid(maxWidth: 85, maxHeight: 75) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `);
  return data.contentfulPerson;
};

const Layout = ({ children, location }) => {
  const hero = useHero();
  const siteTitle = useSiteTitle();
  const [toggleNav, setToggleNav] = React.useState(false);
  const toggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="wrapper">
      <aside>
        <Navigation toggle={toggle} pathname={location.pathname} />
        <Hero data={hero} />
      </aside>
      <div>{children}</div>
      <BackToTop />
      <footer>
        &copy;
        <Link to="/">{siteTitle}</Link>
      </footer>
    </div>
  );
};

export default Layout;
