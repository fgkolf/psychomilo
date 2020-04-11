import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/Layout/layout'
import heroStyles from '../components/hero.module.css'
import Share from '../components/share'

class BlogPostTemplate extends React.Component {
  render () {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const url = get(this, 'props.data.site.siteMetadata.url')
    const socialUrl = `${url}/blog/${post.slug}`

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <Helmet title={post.title}/>
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <article className="post-content page-template no-image">
          <div className="post-content-body">
            <h1 className="section-headline">{post.title}</h1>
            <p style={{ display: 'block' }}>{post.publishDate}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <Share url={socialUrl} title={post.title}/>
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
