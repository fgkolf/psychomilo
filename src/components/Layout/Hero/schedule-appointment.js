import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { OverlayContext } from '../Menu/overlay-store';

const ScheduleAppointment = () => {
  const { setOverlay } = useContext(OverlayContext);

  const toggle = () => {
    setOverlay({ show: true, flavor: 'scheduler' });
  };

  return (
    <button className="schedule-btn" type="button" onClick={toggle}>
      Κλείσε ραντεβού
      <FontAwesomeIcon size="lg" icon={faCalendar} />
    </button>
  );
};

export default ScheduleAppointment;
