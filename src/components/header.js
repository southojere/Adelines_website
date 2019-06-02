import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import styled from 'styled-components';

const MyHeader = styled.div`
  display:flex;
  justify-content:space-between;
  /* align-items:center; */
  
`

const Name = styled.h1`
  font-weight:normal;
`
const Bio = styled.h1`
  font-weight:normal;
`


class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.getElementById('header');
    this.setState({ top: window.innerHeight/2, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0;
  }

  render() {
    return (
      <div>
        <MyHeader id="header" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
          <Name>
            <Link to="/">
              {this.props.siteTitle}
            </Link>
          </Name>
          <Bio><b>Graphic designer</b> <span>enjoying a bit of</span> <span>everything</span></Bio>
        </MyHeader>
      </div>
    );
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
