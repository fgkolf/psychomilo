import React from 'react'
import Layout from '../components/Layout/layout'

const Contact = ({ location }) => (
  <Layout location={location}>
    <div className="post-content page-template no-image wrapper">
      <div className="post-content-body">
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-12">
              <input
                type="text"
                name="demo-name"
                id="demo-name"
                placeholder="Name"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                name="demo-name"
                id="demo-name"
                placeholder="Name"
              />
            </div>
            <div className="col-12">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows="8"
              />
            </div>
            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" className="primary"/></li>
                <li><input type="reset"/></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Contact
