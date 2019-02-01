import React, { Component } from 'react'
import myStyle from '../css/myStyles.css'

class Leftnav extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false,
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  render() {
    let pic = <div></div>
    if (this.state.isHovering) {
        console.log('hover');
        pic = <span>🐱</span>
    }
    return (
      <div className="nav">
        <p
          className="navItem spacing"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <u>About Me</u>
          {pic}
        </p>
        <p className="navItem">
          <u>Projects</u>
        </p>
      </div>
    )
  }
}

export default Leftnav
