import React, { Component } from 'react'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from '@reach/router'
import { view, store } from 'react-easy-state'

class Project extends Component {
  firstImage
  secondImage
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false,
      firstImage: this.props.images[0],
      secondImage: this.props.images[1],
    }

    this.firstImage = this.state.firstImage
    this.secondImage = this.state.secondImage
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
    let showing
    if (!this.state.isHovering) {
      showing = (
        <div>
          <img
            src={this.firstImage}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          />
          <p style={{ fontSize: '39px', lineHeight: '50px', color: '#f59bb0' }}>
            {this.props.name}
          </p>
        </div>
      )
    } else {
      showing = (
        <div>
          <img
            src={this.secondImage}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          />
          <p style={{ fontSize: '39px', lineHeight: '50px', color: '#ffc33e' }}>
            {this.props.name}
          </p>
        </div>
      )
    }

    return (
      <div>
        <ScrollAnimation animateIn="fadeIn">
          <Link to={this.props.link} style={{ textDecoration: 'none' }}>
            {showing}
          </Link>
        </ScrollAnimation>
      </div>
    )
  }
}

export default view(Project)
