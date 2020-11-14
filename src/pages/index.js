import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import ArticlePreview from '../components/article-preview';
import useSiteTitle from '../utils/useSiteTitle';

import '../utils/css/screen.scss';

const RootIndex = ({ location, data }) => {
  const siteTitle = useSiteTitle();
  const posts = get(data, 'allContentfulBlogPost.edges');
  const [author] = get(data, 'allContentfulPerson.edges');
  return (
    <Layout location={location} author={author}>
      <Helmet title={siteTitle} />
      <div>
        <ul>
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
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
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
            fluid(maxWidth: 85, maxHeight: 75, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
