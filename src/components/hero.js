import React from 'react'
import HeroImage from './hero-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <HeroImage
      alt={data.name}
      fluidImage={data.heroImage.fluid}
      imageStyle={{}} // no margin wanted here
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
