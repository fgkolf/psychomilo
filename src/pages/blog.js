import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import BlogPostPreview from '../components/blog-post-preview';
import useSiteTitle from '../utils/helpers/useSiteTitle';

const BlogIndex = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  const siteTitle = useSiteTitle();
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
