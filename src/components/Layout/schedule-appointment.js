import React, { useState, useEffect } from 'react';

const ScheduleAppointment = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (showScheduler) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'visible';
    }
  }, [showScheduler]);

  const toggle = () => {
    setShowScheduler((prevShow) => !prevShow);
  };

  if (!showScheduler) {
    return (
      <button type="button" onClick={toggle}>
        SCHEDULE AN APPOINTMENT
      </button>
    );
  }
  return (
    <div className="overlay">
      <button type="button" onClick={toggle} className="close">
        Close
      </button>
      <div className="scheduler">
        <h1>SCHEDULE AN APPOINTMENT</h1>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
