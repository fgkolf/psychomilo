import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import Share from '../components/BlogPost/share';
import useSiteUrl from '../utils/helpers/useSiteUrl';

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  const url = useSiteUrl();
  const socialUrl = `${url}/blog/${post.slug}`;

  return (
    <Layout>
      <Helmet title={post.title} />
      <div>
        <Img
          style={{ maxHeight: 'calc(35vh - 5rem)', minHeight: '200px' }}
          alt={post.title}
          fluid={post.heroImage.fluid}
        />
        <article>
          <h1 className="title">{post.title}</h1>
          <p className="subtitle">{`${post.publishDate.toUpperCase()} | CATEGORY`}</p>
          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <Share url={socialUrl} title={post.title} />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD MMMM YYYY")
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
