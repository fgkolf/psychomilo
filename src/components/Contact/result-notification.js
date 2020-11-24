import React from 'react';

const ResultNotification = ({ result }) => {
  if (!result) return null;

  if (result === 'error') {
    return <div className="notification-error">Υπήρξε κάποιο πρόβλημα, δοκιμάστε ξανά.</div>;
  }
  return <div className="notification-success">Το μήνυμα σας απεστάλη επιτυχώς!</div>;
};

export default ResultNotification;
