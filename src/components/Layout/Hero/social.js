import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import useSocial from '../../../utils/helpers/useSocial';

const Social = () => {
  const { facebook, linkedin, instagram } = useSocial();
  return (
    <ul className="social">
      <li>
        <a href={facebook} className="social-icon facebook" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="sm" icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href={linkedin} className="social-icon linkedin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href={instagram} className="social-icon instagram" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="sm" icon={faInstagram} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
