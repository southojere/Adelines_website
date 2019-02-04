
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'
import Header from './header'
// import Menu from '../components/menu'
import Leftnav from '../components/leftnav'
import Rightnav from '../components/rightnav'
import Hamburger from '../components/hamburger'
// import Popup from 'reactjs-popup'
import './layout.css'

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
}



class Layout extends Component {

  constructor(props,data) {
    super(props);
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
          <ScrollToTop showUnder={160} duration={9000000}>
            <Leftnav />
            <Rightnav />
          </ScrollToTop>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: '90%',
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
           {this.props.children}
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
            </footer>
          </div>
        </>
      )}
    />
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
