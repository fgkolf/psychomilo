import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import BlogPostPreview from '../components/blog-post-preview';

const BlogIndex = ({ data }) => {
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

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY")
          tags
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
