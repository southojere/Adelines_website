import React, { Component } from 'react';
import myStyle from '../css/myStyles.css'

class Rightnav extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "nav-right">
                <p className="navItem spacing"><u>instagram</u></p>
                <p className="navItem"><u>Twitter</u></p>
                <p className="navItem"><u>LinkedIn</u></p>
            </div>
        );
    }
}

export default Rightnav;