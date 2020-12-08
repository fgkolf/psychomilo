import { useStaticQuery, graphql } from 'gatsby';

const useSocial = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            facebook
            linkedin
            instagram
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.social;
};

export default useSocial;
