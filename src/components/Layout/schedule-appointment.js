import React, { useState } from 'react';
import Overlay from '../overlay';

const ScheduleAppointment = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  const toggle = () => {
    setShowScheduler((prevShow) => !prevShow);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        SCHEDULE AN APPOINTMENT
      </button>
      <Overlay visible={showScheduler} toggle={toggle}>
        <div className="scheduler">
          <h1>SCHEDULE AN APPOINTMENT</h1>
        </div>
      </Overlay>
    </>
  );
};

export default ScheduleAppointment;
