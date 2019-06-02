import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Section = styled.section`
    height:100vh;
    width:100vw;
    background:red;
`

const LandingSection = () => {
    return (
        <Section>
            <Header></Header>            
        </Section>
    );
};

export default LandingSection;