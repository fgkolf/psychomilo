import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/Layout/layout'
import Share from '../components/BlogPost/share'
import BlogPostNavigation from '../components/BlogPost/blog-post-navigation'
import useSiteUrl from '../utils/useSiteUrl'
import HeroImage from '../components/hero-image'

const BlogPostTemplate = ({ location, data }) => {
  const post = get(data, 'contentfulBlogPost')
  const url = useSiteUrl()
  const socialUrl = `${url}/blog/${post.slug}`

  return (
    <Layout location={location}>
      <Helmet title={post.title}/>
        <HeroImage
          alt={post.title}
          fluidImage={post.heroImage.fluid}
        />
      <article className="post-content page-template no-image wrapper">
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
