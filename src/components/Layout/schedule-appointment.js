import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../overlay';

const ScheduleAppointment = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  const toggle = () => {
    setShowScheduler((prevShow) => !prevShow);
  };

  return (
    <>
      <button className="schedule-btn" type="button" onClick={toggle}>
        SCHEDULE AN APPOINTMENT
        <FontAwesomeIcon size="lg" icon={faCalendar} />
      </button>
      <Overlay visible={showScheduler} toggle={toggle}>
        <div className="scheduler">
          <h1>Κλείσε ραντεβού</h1>
          <form>
            <input type="text" name="name" placeholder="Όνομα" onChange={() => {}} />
            <input type="text" name="name" placeholder="Email" onChange={() => {}} />
            <input type="text" name="name" placeholder="Date" onChange={() => {}} />
            <input type="text" name="name" placeholder="Time" onChange={() => {}} />
            <div className="button-area">
              <button type="button">CONFIRM</button>
            </div>
          </form>
        </div>
      </Overlay>
    </>
  );
};

export default ScheduleAppointment;
