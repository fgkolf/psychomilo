import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Share from '../components/share';
import useSiteUrl from '../utils/helpers/useSiteUrl';

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  const url = useSiteUrl();
  const socialUrl = `${url}/blog/${post.slug}`;

  let subtitle = `${post.publishDate.toUpperCase()}`;
  if (post.tags) {
    subtitle += ` | ${post.tags.join(', ').toUpperCase()}`;
  }

  return (
    <Layout title={post.title}>
      <div>
        <Img
          style={{ maxHeight: 'calc(35vh - 5rem)', minHeight: '200px' }}
          alt={post.title}
          fluid={post.heroImage.fluid}
        />
        <article>
          <h1 className="title">{post.title}</h1>
          <p className="subtitle">{subtitle}</p>
          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <div className="share-section">
            <Share url={socialUrl} title={post.title} />
          </div>
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
      tags
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
