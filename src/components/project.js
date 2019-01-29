import React, { Component } from 'react';
import Img from 'gatsby-image';

class Project extends Component {
    firstImage;
    secondImage;
    constructor(props) {
        super(props)
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            name: this.props.name,
            firstImage: this.props.images[0],
            secondImage: this.props.images[1],
        };

        this.firstImage = this.state.firstImage;
        this.secondImage = this.state.secondImage;
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        let showing;
        if (!this.state.isHovering) {
            showing =  < img src={this.firstImage} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
        } else {
            showing =  < img src={this.secondImage} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
        }
        
        return (
            showing
        );
    }
}

export default Project;