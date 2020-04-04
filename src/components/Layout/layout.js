import React from "react"
import { Link } from 'gatsby'
import Navigation from './navigation';
import Social from './social'

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
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{siteTitle}</Link>
      </footer>
    </div>
  )
}

export default Layout
