import React from 'react';
import Img from 'gatsby-image';

const imageStyle = {
  borderRadius: '1%',
  boxShadow: '0 2px 2px rgba(0,0,0,0.1)',
};

const PreviewImage = ({ fluidImage }) => <Img alt="preview" fluid={fluidImage} style={imageStyle} />;

export default PreviewImage;
