import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ResultNotification = ({ result }) => {
  if (result === 'error') {
    return (
      <div className="notification-error btn-entrance">
        <FontAwesomeIcon icon={faTimes} />
        &nbsp;Υπήρξε κάποιο πρόβλημα, δοκιμάστε ξανά.
      </div>
    );
  }
  return (
    <div className="notification-success btn-entrance">
      <FontAwesomeIcon icon={faCheck} />
      &nbsp;Το μήνυμα σας απεστάλη επιτυχώς!
    </div>
  );
};

export default ResultNotification;
