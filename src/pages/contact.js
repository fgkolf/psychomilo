import React from 'react';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/contact-form';

const Contact = () => (
  <Layout>
    <div className="contact-wrapper">
      <h1>Get in touch</h1>
      <ContactForm />
    </div>
  </Layout>
);

export default Contact;
