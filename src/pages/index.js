import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import ArticlePreview from '../components/article-preview';
import useSiteTitle from '../utils/helpers/useSiteTitle';

import '../utils/css/screen.scss';

const RootIndex = ({ location, data }) => {
  const siteTitle = useSiteTitle();
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <div>
        <ul className="article-list">
          {posts.map(({ node }) => (
            <ArticlePreview key={node.slug} article={node} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 5) {
      totalCount
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY")
          heroImage {
            fixed(width: 240, height: 240) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
