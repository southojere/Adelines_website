import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'
import Header from './header'
import Leftnav from '../components/leftnav'
import Rightnav from '../components/rightnav'
import Hamburger from '../components/hamburger'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ScrollToTop showUnder={160} duration={9000000}> {/*quick fix*/}
          <Leftnav/>
          <Rightnav/>
        </ScrollToTop>
      {/* <Hamburger open={true}/> */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '90%',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            {/* © {new Date().getFullYear()}, Made by
            {` `}
            <a href="https://www.jeremysouthon.com">Jeremy Southon</a> */}
            <div className="scrollUp">
              <ScrollToTop
                showUnder={160}
                easing="easeInOutQuad"
                duration={1000}
              >
                <span style={{ fontSize: '26px', color: '#f59bb1' }}>↑</span>
              </ScrollToTop>
            </div>
            <div className="cat">
              <img src={require('../images/cat-right-gif.gif')} />
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
