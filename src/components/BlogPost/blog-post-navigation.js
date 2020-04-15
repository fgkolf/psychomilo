import React from 'react'
import { Link } from 'gatsby'

import styles from './blog-post-navigation.module.css'

const BlogPostNavigationItem = ({ item, headline, textAlign = "left" }) => (
  item ?
    <div className={styles.blogNavigationItem}>
      <Link style={{ textDecoration: 'none', textAlign }} to={`/blog/${item.slug}`}>
        <p>{headline}</p>
        {item.title}
      </Link>
    </div>
    : <div className={styles.blogNavigationItem} />
)

const BlogPostNavigation = ({ previous, next }) => {
  return (
    <nav className={styles.blogNavigation}>
      <BlogPostNavigationItem
        item={previous}
        headline="Προηγούμενο"
      />
      <BlogPostNavigationItem
        item={next}
        headline="Επόμενο"
        textAlign="right"
      />
    </nav>
  )
}

export default BlogPostNavigation
