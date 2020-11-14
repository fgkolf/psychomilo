import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';

import styles from './communication-details.module.css';

const Item = ({ icon, content }) => (
  <div>
    <FontAwesomeIcon className={styles.communicationIcon} icon={icon} />
    <span>{content}</span>
  </div>
);

const CommunicationDetails = () => {
  return (
    <div>
      <h4>Επικοινωνία</h4>
      <Item
        icon={faMapMarkerAlt}
        content={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps?q=34+%CE%91%CF%86%CE%B1%CE%AF%CE%B1%CF%82,+%CE%93%CE%B1%CE%BB%CE%AC%CF%84%CF%83%CE%B9,+%CE%91%CE%B8%CE%AE%CE%BD%CE%B1"
          >
            Αφαίας 34, 11146, Γαλάτσι, Αθήνα
          </a>
        }
      />
      <Item icon={faEnvelope} content="test@testmail.com" />
      <Item icon={faMobile} content="6999999999" />
      <Item icon={faPhone} content="2109999999" />
    </div>
  );
};

export default CommunicationDetails;
