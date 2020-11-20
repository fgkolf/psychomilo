import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogPostPreview = ({ blogPost }) => {
  const { title, heroImage, slug, publishDate, description } = blogPost;

  return (
    <li className="blog-post-node">
      <Img alt={title} fluid={heroImage.fluid} />
      <div className="blog-post-details">
        <Link className="title" to={`/blog/${slug}`}>
          {title}
        </Link>
        <p className="subtitle">{`${publishDate.toUpperCase()} | CATEGORY`}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
        <Link className="read-more" to={`/blog/${slug}`}>
          <strong>Read more...</strong>
        </Link>
      </div>
    </li>
  );
};

export default BlogPostPreview;
