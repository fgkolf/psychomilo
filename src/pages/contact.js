import React from 'react'
import Layout from '../components/Layout/layout'
import ContactForm from '../components/Contact/contact-form'

const Contact = ({ location }) => (
  <Layout location={location}>
    <div className="post-content page-template no-image wrapper">
      <div className="post-content-body">
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default Contact
