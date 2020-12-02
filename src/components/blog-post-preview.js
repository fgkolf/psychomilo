import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogPostPreview = ({ blogPost }) => {
  const { title, heroImage, slug, publishDate, childContentfulBlogPostBodyTextNode } = blogPost;

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const readMoreRef = useRef(null);

  useEffect(() => {
    const resizeListener = () => {
      const maxHeight =
        240 - (contentRef.current.offsetTop - titleRef.current.offsetTop) - readMoreRef.current.style.height - 35;
      contentRef.current.style.maxHeight = `${maxHeight}px`;
    };
    window.addEventListener('resize', resizeListener);
    resizeListener();
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <li className="blog-post-node">
      <Img alt={title} fluid={heroImage.fluid} style={{ borderRadius: '20px' }} />
      <div className="blog-post-details">
        <Link ref={titleRef} className="title" to={`/blog/${slug}`}>
          {title}
        </Link>
        <p className="subtitle">{`${publishDate.toUpperCase()} | CATEGORY`}</p>
        <div
          ref={contentRef}
          className="collapsed"
          dangerouslySetInnerHTML={{
            __html: childContentfulBlogPostBodyTextNode.body,
          }}
        />
        <Link ref={readMoreRef} className="read-more" to={`/blog/${slug}`}>
          <strong>Read more...</strong>
        </Link>
      </div>
    </li>
  );
};

export default BlogPostPreview;
