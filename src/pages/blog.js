import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/Layout/layout'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render () {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title') // todo use static query instead
    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <Helmet title={siteTitle}/>
        <div className={styles.hero}>Blog</div>
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

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
