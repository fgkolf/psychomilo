import { useStaticQuery, graphql } from 'gatsby';

const useSiteUrl = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)
  return data.site.siteMetadata.url;
}

export default useSiteUrl;
