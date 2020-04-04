import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from 'gatsby'
import get from 'lodash/get'

const NotFoundPage = ({ location }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  return (
    <Layout title={siteTitle} location={location}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
