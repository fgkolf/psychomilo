import React from 'react';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/contact-form';
import CommunicationDetails from '../components/Contact/communication-details';

const Contact = () => (
  <Layout>
    <div className="contact-wrapper">
      <h1>Get in touch</h1>
      <ContactForm />
      <br />
      <CommunicationDetails />
    </div>
  </Layout>
);

export default Contact;
