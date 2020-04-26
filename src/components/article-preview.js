import React from 'react'
import { Link } from 'gatsby'
import PreviewImage from './preview-image'

import styles from './article-preview.module.css'

export default ({ article }) => ( // todo remove all post card post etc related classes and styles.tag
  <li className={styles.articleNode}>
    <Link className={styles.articleLink} to={`/blog/${article.slug}`}>
      <PreviewImage fluidImage={article.heroImage.fluid} />
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
    </Link>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html
      }}
    />
  </li>
)
