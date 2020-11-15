import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Navigation from './navigation';
import BackToTop from './back-to-top';
import useSiteTitle from '../../utils/useSiteTitle';
import Hero from '../hero';

const useHero = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
        edges {
          node {
            name
            title
            company
            shortBio {
              shortBio
            }
            heroImage: image {
              fluid(maxWidth: 85, maxHeight: 75, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulPerson.edges[0];
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
        <Hero data={hero.node} />
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
