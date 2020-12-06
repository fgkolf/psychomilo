import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';

const Share = ({ url, title }) => (
  <ul className="share-icons">
    <li>
      <FacebookShareButton url={url} className="share-icon facebook">
        <FontAwesomeIcon size="sm" icon={faFacebookF} />
      </FacebookShareButton>
    </li>
    <li>
      <LinkedinShareButton url={url} className="share-icon linkedin" title={title}>
        <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
      </LinkedinShareButton>
    </li>
    <li>
      <LinkedinShareButton url={url} className="share-icon instagram" title={title}>
        <FontAwesomeIcon size="sm" icon={faInstagram} />
      </LinkedinShareButton>
    </li>
  </ul>
);

export default Share;
