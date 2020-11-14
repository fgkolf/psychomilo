import React from 'react';
import Img from 'gatsby-image';
import Share from './BlogPost/share';

const Hero = ({ data }) => (
  <div>
    <Img alt={data.name} fluid={data.heroImage.fluid} className="hero-image" />
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
      <button type="button">SCHEDULE AN APPOINTMENT</button>
    </div>
  </div>
);

export default Hero;
