import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import BlogPostPreview from '../components/blog-post-preview';

import '../utils/css/screen.scss';

const RootIndex = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
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
