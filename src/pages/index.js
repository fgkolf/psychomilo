import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import BlogPostPreview from '../components/blog-post-preview';
import useSiteTitle from '../utils/helpers/useSiteTitle';

import '../utils/css/screen.scss';

const RootIndex = ({ data }) => {
  const siteTitle = useSiteTitle();
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div>
        <ul className="blog-post-list">
          {posts.map(({ node }) => (
            <BlogPostPreview key={node.slug} blogPost={node} />
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
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyContentfulFluid
            }
          }
          childContentfulBlogPostBodyTextNode {
            body
          }
        }
      }
    }
  }
`;
