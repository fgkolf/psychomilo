import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import ArticlePreview from '../components/article-preview';
import useSiteTitle from '../utils/helpers/useSiteTitle';

const BlogIndex = ({ location, data }) => {
  const posts = data.allContentfulBlogPost.edges;
  const siteTitle = useSiteTitle();
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
