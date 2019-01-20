import React, { Component } from 'react';
import Typist from 'react-typist';
import myStyle from '../css/myStyles.css'
class Bio extends Component {

    render() {
        let str1 = 'animals (especially cats).';
        let str2 = 'all things print.';
        let str3 = 'stationery.';
        let str4 = 'Photography.';
        return (
            <div>
                <Typist className="bio">
                    <span>A graphic designer with a huge love <br/>for </span>
                    <Typist.Backspace count={0} delay={200} />
                    <span>{str2}</span>
                    <Typist.Backspace count={str2.length} delay={200} />
                    <span>{str1}</span>
                    <Typist.Backspace count={str1.length} delay={200} />
                    <span>{str3}</span>
                    <Typist.Backspace count={str3.length} delay={200} />
                    <span>{str4}</span>
                </Typist>
            </div>
        );
    }
}

export default Bio;