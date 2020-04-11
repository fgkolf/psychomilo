import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import Social from './social'
import BackToTop from './back-to-top'

const Layout = ({ children, siteTitle, location }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <Navigation toggleNav={toggleNav} setToggleNav={setToggleNav} pathname={location.pathname}/>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {siteTitle}
            </Link>
          </div>
          <Social />
        </div>
      </header>
      <div className="transition-fade">
        {children}
      </div>
      <BackToTop/>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{siteTitle}</Link>
      </footer>
    </div>
  )
}

export default Layout
