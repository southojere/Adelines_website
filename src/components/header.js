import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '90%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className ="name" style={{ margin: 0, textDecoration: 'underline' }}>
        <Link
          to="/"
          style={{
            color: '#ffc33e',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="infoContainer">
          <span style={{textDecoration:'underline',float:'right', color:'#f59bb1',fontWeight:'bold'}}>Say hello!</span>
          <br/>
          <span style={{float:'right', color:'#f59bb1', fontWeight:'bold'}}>adeline.ang1@hotmail.com</span>
      </div>
      <hr style={{
      marginTop:'40px',
      height: '2px',
      background: 'rgb(255, 195, 62)',
    }} />
    </div>
   
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
