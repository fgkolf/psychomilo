import React from 'react';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/contact-form';
import CommunicationDetails from '../components/Contact/communication-details';

const Contact = () => (
  <Layout>
    <div>
      <ContactForm />
      <br />
      <CommunicationDetails />
    </div>
  </Layout>
);

export default Contact;
