import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ArticlePreview = ({ article }) => (
  <li className="article-node">
    <Img alt={article.title} fixed={article.heroImage.fixed} />
    <div className="article-details">
      <Link className="title" to={`/blog/${article.slug}`}>
        {article.title}
      </Link>
      <p className="subtitle">{`${article.publishDate.toUpperCase()} | CATEGORY`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      <Link className="read-more" to={`/blog/${article.slug}`}>
        <strong>Read more...</strong>
      </Link>
    </div>
  </li>
);

export default ArticlePreview;
