import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'
import Header from './header'
import Menu from '../components/menu'
import Leftnav from '../components/leftnav'
import Rightnav from '../components/rightnav'
import Hamburger from '../components/hamburger'
import Popup from 'reactjs-popup'
import './layout.css'

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
}

class Layout extends Component {
  constructor(props, data) {
    super(props)
  }

  render() {
    return (
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
            <div>
              {this.props.children}
              <footer>
                © {new Date().getFullYear()}, Made by
              {` `}
              <a href="https://www.jeremysouthon.com">Jeremy Southon</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
