import React from 'react';
import { Link } from 'gatsby';
import useBlogImage from '../utils/useBlogImage';
import PreviewImage from './preview-image';

import styles from './article-preview.module.css';

export default () => {
  const previewBlogImage = useBlogImage();
  return (
    <li className={styles.articleNode}>
      <Link className={styles.articleLink} to="/blog">
        <PreviewImage fluidImage={previewBlogImage} />
        <h3 className={styles.previewTitle}>Δείτε περισσότερα</h3>
      </Link>
    </li>
  );
};
