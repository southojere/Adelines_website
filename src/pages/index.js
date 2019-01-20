import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Bio></Bio>
    <h5 style={{textAlign:'center', color: '#ffc33e',}}><u>Selected works</u></h5>
    {/* TODO: Projects */}
    <Leftnav></Leftnav>
    <div className="imageRow">
      <Project name="Import/Export" images={[require('../images/importexport1.png'),require('../images/importexport2.png'),]}></Project>
      <Project name="Typography" images={[require('../images/typo1.png'),require('../images/typo2.png')]}></Project>
    </div>
    
    <div className="imageRow">
      <Project name="New Years" images={[require('../images/newyears1.png'),require('../images/newyears2.png')]}></Project>
      <Project name="letter" images={[require('../images/letter1.png'),require('../images/letter2.png')]}></Project>
  </div>
  </Layout>
)

export default IndexPage
