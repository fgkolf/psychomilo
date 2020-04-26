import React from 'react'
import Img from 'gatsby-image'

const PreviewImage = ({ fluidImage, imageStyle }) => (
  <Img
    alt="preview"
    fluid={fluidImage}
    style={imageStyle}
  />
)

PreviewImage.defaultProps = {
  imageStyle: {
    borderRadius: '1%',
    boxShadow: '0 2px 2px rgba(0,0,0,0.1)'
  }
}

export default PreviewImage
