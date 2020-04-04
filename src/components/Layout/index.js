import React from "react"
import { Link } from "gatsby"
import Navigation from './navigation';
import Social from './social'

const Layout = ({ title="The title", children }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <Navigation toggleNav={toggleNav} setToggleNav={setToggleNav} />
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
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
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
      </footer>
    </div>
  )
}

export default Layout
