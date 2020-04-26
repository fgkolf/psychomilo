import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/Layout/layout'
import ArticlePreview from '../components/article-preview'
import ArticleBlogPreview from '../components/article-blog-preview'
import useSiteTitle from '../utils/useSiteTitle'

import '../components/base.css' // todo old css, keeps home grid properly
import '../utils/css/screen.css'
import '../utils/normalize.css'

const RootIndex = ({ location, data }) => {
    const siteTitle = useSiteTitle();
    const posts = get(data, 'allContentfulBlogPost.edges')
    const totalCount = get(data, 'allContentfulBlogPost.totalCount')
    const [author] = get(data, 'allContentfulPerson.edges')
    // todo remove all index not used related classes
    return (
      <Layout location={location}>
        <Helmet title={siteTitle}/>
        <header className="page-head">
          <h2 className="page-head-title">
            PAGE HEAD, This will be the intro text to the site
          </h2>
        </header>
        <Hero data={author.node}/>
        <div className="wrapper">
          <h1 className="section-headline">Πρόσφατες αναρτήσεις</h1>
          <ul className="article-list">
            {posts.map(({ node }) => (<ArticlePreview key={node.slug} article={node}/>))}
            {totalCount > 5 && <ArticleBlogPreview />}
          </ul>
        </div>
      </Layout>
    )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 5) {
      totalCount,
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
