import React from 'react';
import Share from '../BlogPost/share';
import ScheduleAppointment from './schedule-appointment';
import logo from '../../../static/images/logo.svg';

const Hero = ({ data }) => (
  <div>
    <img src={logo} alt={data.name} className="hero-image" />
    <div className="hero-details">
      <p>
        <strong>{data.name}</strong>
      </p>
      <p>{data.title}</p>
      <p>{data.company}</p>
      <hr />
      <p>{data.shortBio.shortBio}</p>
      <hr />
      <Share url="/" title="the title" />
      <ScheduleAppointment />
    </div>
  </div>
);

export default Hero;
