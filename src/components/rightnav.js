import React, { Component } from 'react';
import myStyle from '../css/myStyles.css'

class Rightnav extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "nav-right">
                <p className="navItem spacing"><a href="https://www.instagram.com/catadelineee/">Instagram</a></p>
                <p className="navItem"><a href="https://twitter.com/adeline_ang">Twitter</a></p>
                <p className="navItem"><a href="https://www.linkedin.com/in/adeline-ang/">LinkedIn</a></p>
            </div>
        );
    }
}

export default Rightnav;