import React from 'react';
import Img from 'gatsby-image';

const HeroImage = ({ fluidImage, alt }) => <Img alt={alt} fluid={fluidImage} />;

export default HeroImage;
