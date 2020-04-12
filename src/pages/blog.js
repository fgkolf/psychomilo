import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/Layout/layout'
import ArticlePreview from '../components/article-preview'
import useSiteTitle from '../utils/useSiteTitle'

const BlogIndex = ({ location, data }) => {
    const posts = get(data, 'allContentfulBlogPost.edges')
    const siteTitle = useSiteTitle();
    return (
      <Layout location={location}>
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

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
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
  }
`
