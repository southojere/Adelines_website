import React, { Component } from 'react';

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
        if (this.state.isHovering) {
            this.currentlyShowing = this.secondImage;
            console.log('hovering');
        } else {
            this.currentlyShowing = this.firstImage;
            console.log('not hovering');
        }

        return (
            <div>
                <img src={this.currentlyShowing} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
            </div>
        );
    }
}

export default Project;