import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

const Share = ({ url, title }) => (
  <ul className="social">
    <li>
      <FacebookShareButton url={url} className="social-icon facebook">
        <FontAwesomeIcon size="sm" icon={faFacebookF} />
      </FacebookShareButton>
    </li>
    <li>
      <LinkedinShareButton url={url} title={title} source={url} className="social-icon linkedin">
        <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
      </LinkedinShareButton>
    </li>
    <li>
      <TwitterShareButton url={url} via={url} className="social-icon twitter" title={title}>
        <FontAwesomeIcon size="sm" icon={faTwitter} />
      </TwitterShareButton>
    </li>
  </ul>
);

export default Share;
