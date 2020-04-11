import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/Layout/layout'
import heroStyles from '../components/hero.module.css'
import Share from '../components/share'
import BlogPostNavigation from '../components/blog-post-navigation'

const BlogPostTemplate = ({ location, data }) => {
  const post = get(data, 'contentfulBlogPost')
  const url = get(data, 'site.siteMetadata.url')
  const socialUrl = `${url}/blog/${post.slug}`

  return (
    <Layout location={location}>
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
      <BlogPostNavigation previous={post.previous} next={post.next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      slug
      next {
        title
        slug
      }
      previous {
        title
        slug
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
