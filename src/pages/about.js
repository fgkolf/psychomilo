import React from 'react'
import Layout from '../components/Layout/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import styles from './about.module.css'

const part1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend magna eget ante sollicitudin, eu molestie mauris venenatis. Quisque dui felis, varius tincidunt finibus at, blandit eget metus.'

const part2 = 'Cras ultricies tellus et urna finibus aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo lorem vel odio consequat, vitae aliquam ligula consectetur.'

const part3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend magna eget ante sollicitudin, eu molestie mauris venenatis. Quisque dui felis, varius tincidunt finibus at, blandit eget metus.'

const part4 = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In facilisis ipsum ex, quis dictum diam pulvinar nec. Curabitur scelerisque euismod sapien, quis suscipit lectus dictum in. Duis lobortis magna vitae lacinia dignissim. Pellentesque faucibus odio quis mollis sodales. Mauris ut nunc porttitor, dictum nisl et, mollis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ac euismod augue, id mollis tellus.'

const part5 = 'Sed a enim vitae ante imperdiet dignissim vitae vitae neque. Aenean suscipit est non libero pretium molestie. Fusce vel est in tortor consequat convallis at vel mauris. Nullam dictum auctor pretium. Donec placerat nec lacus vel facilisis. Aenean sed ultrices magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur vestibulum justo, nec rhoncus elit consectetur sit amet. Donec dui libero, rhoncus vel lorem quis, mollis condimentum dui. Nullam tempus feugiat nibh, ut mollis ligula interdum id. Duis molestie commodo interdum. Cras eget urna vitae felis posuere dapibus eu et quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

const About = ({ location, data }) => {
  const [author] = get(data, 'allContentfulPerson.edges')
  const { heroImage } = author.node
  return (
    <Layout location={location}>
      <div className="wrapper">
        <h1>About Me</h1>
        <div className={styles.aboutWrapper}>
          <Img className={styles.aboutImage} fluid={heroImage.fluid}/>
          <div className={styles.aboutText}>
            <p>{part1}</p>
            <p>{part2}</p>
            <p>{part3}</p>
            <p>{part4}</p>
            <p>{part5}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          heroImage: image {
            fluid(
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
