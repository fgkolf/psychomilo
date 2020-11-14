import React from 'react';
import Img from 'gatsby-image';
import heroStyles from './hero.module.css';

const HeroImage = ({ fluidImage, alt, imageStyle }) => (
  <Img alt={alt} fluid={fluidImage} className={heroStyles.heroImage} style={imageStyle} />
);

HeroImage.defaultProps = {
  imageStyle: { marginTop: '5vmin' },
};

export default HeroImage;
