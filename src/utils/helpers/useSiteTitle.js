import { useStaticQuery, graphql } from 'gatsby';

const useSiteTitle = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return data.site.siteMetadata.title;
};

export default useSiteTitle;
