import React from 'react';
import Layout from '../components/Layout/layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className="wrapper">
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
