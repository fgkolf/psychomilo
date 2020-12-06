import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import logo from '../../../static/images/logo.svg';
import useSiteUrl from '../../utils/helpers/useSiteUrl';
import useSiteTitle from '../../utils/helpers/useSiteTitle';
import ScheduleAppointment from './schedule-appointment';
import Share from '../share';

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
  const siteUrl = useSiteUrl();
  const siteTitle = useSiteTitle();
  return (
    <>
      <img src={logo} alt={hero.name} className="hero-image" />
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
          <p>{hero.shortBio.shortBio}</p>
          <hr />
        </div>
        <div className="hero-actions">
          <Share url={siteUrl} title={siteTitle} />
          <ScheduleAppointment />
        </div>
      </div>
    </>
  );
};

export default Hero;
