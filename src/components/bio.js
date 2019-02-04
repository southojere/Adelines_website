import React, { Component } from 'react';
import Typist from 'react-typist';
class Bio extends Component {

    render() {
        let str1 = 'memorable experiences';
        let str2 = 'meaningful connections';
        let str3 = 'all things print';
        let str4 = 'zines';
        let str5 = 'bookstores';
        let str6 = 'Japanese stationery';
        let str7 = 'animals (especially cats)';
        let str8 = 'flowers';
        let str9 = 'peaches';
        return (
            <div>
                <Typist className="bio">
                    <span>A graphic designer with a huge love <br/>for </span>
                    <Typist.Backspace count={0} delay={200} />
                    <span>{str1}</span>
                    <Typist.Backspace count={str1.length} delay={200} />
                    <span>{str2}</span>
                    <Typist.Backspace count={str2.length} delay={200} />
                    <span>{str3}</span>
                    <Typist.Backspace count={str3.length} delay={200} />
                    <span>{str4}</span>
                    <Typist.Backspace count={str4.length} delay={200} />
                    <span>{str5}</span>
                    <Typist.Backspace count={str5.length} delay={200} />
                    <span>{str6}</span>
                    <Typist.Backspace count={str6.length} delay={200} />
                    <span>{str7}</span>
                    <Typist.Backspace count={str7.length} delay={200} />
                    <span>{str8}</span>
                    <Typist.Backspace count={str8.length} delay={200} />
                    <span>{str9}</span>
                </Typist>
            </div>
        );
    }
}

export default Bio;