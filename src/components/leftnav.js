import React, { Component } from 'react';
import myStyle from '../css/myStyles.css'

class Leftnav extends Component {
    render() {
        return (
            <div className = "nav">
                 <p className="navItem spacing"><u>About Me</u></p>
                <p className="navItem"><u>Projects</u></p>
            </div>
        );
    }
}

export default Leftnav;