import React, { Component } from 'react';
import Img from 'gatsby-image';

class Project extends Component {
    currentlyShowing; //image for thumbnail
    firstImage;
    secondImage;
    constructor(props){
        super(props)
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            name:this.props.name,
            firstImage: this.props.images[0],
            secondImage: this.props.images[1],
        };
        
        this.currentlyShowing = this.state.firstImage;
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
        let showing = [];
        if (this.state.isHovering) {
            this.currentlyShowing = this.secondImage;
            showing = <Img fadeIn={false} fluid={this.state.firstImage} />
        } else {
            this.currentlyShowing = this.firstImage;
            showing =  <Img fadeIn={false} fluid={this.state.secondImage} />
        }
        
        return (
            <span onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
                {showing}
            </span>
        );
    }
}

export default Project;