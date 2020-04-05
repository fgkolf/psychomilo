import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/Layout/layout'
import ArticlePreview from '../components/article-preview'
import '../components/base.css' // todo old css, keeps home grid properly
import '../utils/css/screen.css'
import '../utils/normalize.css'

class RootIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    // todo remove all index not used related classes
    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
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
          </ul>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
