import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import logo from '../../../../static/images/logo.svg';
import ensureScrollActive from '../../../utils/helpers/ensureScrollActive';
import ScheduleAppointment from './schedule-appointment';
import Social from './social';

const useHero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
        name
        title
        company
        shortBio {
          shortBio
        }
      }
    }
  `);
  return data.contentfulPerson;
};

const Hero = () => {
  const hero = useHero();
  return (
    <>
      <Link className="hero-image-link" to="/" onClick={ensureScrollActive}>
        <img src={logo} alt={hero.name} className="hero-image" />
      </Link>
      <div className="hero-details">
        <div className="primary-details">
          <p>
            <strong>{hero.name}</strong>
          </p>
          <p>{hero.title}</p>
        </div>
        <div className="secondary-details">
          <p>{hero.company}</p>
          <hr />
          <div className="online">
            <p>Πραγματοποιούνται online συνεδρίες.</p>
            <p>
              Για περισσότερες πληροφορίες
              <Link to="/contact"> επικοινωνήστε μαζί μου</Link>
            </p>
          </div>
          <hr />
        </div>
        <div className="hero-actions">
          <Social />
          <ScheduleAppointment />
        </div>
      </div>
    </>
  );
};

export default Hero;
