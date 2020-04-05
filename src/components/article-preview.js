import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => ( // todo remove all post card post etc related classes and styles.tag
  <li className={styles.articleNode}>
    <Link className={styles.articleLink} to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid}/>
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </Link>
  </li>
)
