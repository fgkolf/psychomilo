import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'

import styles from './share.module.css';

const Share = ({ url, title }) => (
  <div className={styles.postSocial}>
    SHARE:&nbsp;&nbsp;&nbsp;
    <FacebookShareButton url={url} className={[styles.share, styles.facebook]}>
      <FontAwesomeIcon icon={faFacebook}/>
      <span className={styles.text}>Facebook</span>
    </FacebookShareButton>
    <TwitterShareButton url={url} className={[styles.share, styles.twitter]} title={title}>
      <FontAwesomeIcon icon={faTwitter}/>
      <span className={styles.text}>Twitter</span>
    </TwitterShareButton>
    <LinkedinShareButton url={url} className={[styles.share, styles.linkedin]} title={title}>
      <FontAwesomeIcon icon={faLinkedin}/>
      <span className={styles.text}>LinkedIn</span>
    </LinkedinShareButton>
  </div>
)

export default Share
