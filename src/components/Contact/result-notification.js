import React from 'react';
import styles from './result-notification.module.css';

const ResultNotification = ({ result }) => {
  if (!result) return null;

  if (result === 'error') {
    return <div className={styles.notificationError}>Υπήρξε κάποιο πρόβλημα, δοκιμάστε ξανά.</div>;
  }
  return <div className={styles.notificationSuccess}>Το μήνυμα σας απεστάλη επιτυχώς!</div>;
};

export default ResultNotification;
