import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

import styles from './share.module.css';

const Share = ({ url, title }) => (
  <div className={styles.shareContainer}>
    <div className={styles.shareHeader}>Share this article</div>
    <ul className={styles.shareIcons}>
      <li>
        <FacebookShareButton url={url} className={[styles.shareIcon, styles.facebook]}>
          <FontAwesomeIcon size="sm" icon={faFacebookF} />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={url} className={[styles.shareIcon, styles.twitter]} title={title}>
          <FontAwesomeIcon size="sm" icon={faTwitter} />
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={url} className={[styles.shareIcon, styles.linkedin]} title={title}>
          <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
        </LinkedinShareButton>
      </li>
    </ul>
  </div>
);

export default Share;
