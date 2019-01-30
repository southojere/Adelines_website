import React, { Component } from 'react'

import hamburgerMenu from '../css/hamburgerMenu.css'
class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: props.open
    };
  }
  render() {
    return (
      <div className={this.state.open ? 'burger-menu open' : 'burger-menu'}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    )
  }
}

export default Hamburger
