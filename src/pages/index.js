import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from '@reach/router';

const images = require.context('../images', true);
const IndexPage = ({ data }) => (
  <Layout>
    <Bio />
    <Leftnav />
    <h5 style={{ textAlign: 'left', color: '#ffc33e',fontSize: '50px',fontWeight: 'normal', marginBottom:'66px'}}>
      <u>Selected works</u>
    </h5>
    {
      <div className="imageRow">
        {data.allMarkdownRemark.edges.map(proj => {
          const nameOfImageOne = proj.node.frontmatter.test; 
          const nameOfImageTwo = proj.node.frontmatter.test2; 
          let imagesrc = images(`./${nameOfImageOne}`); //should return name of image
          let imagesrc2 = images(`./${nameOfImageTwo}`); //should return name of image
          return (
            <div>
            <Link to= {proj.node.frontmatter.path}>
            <Project
              key={proj.node.id}
              name="Import/Export"
              images={[imagesrc,imagesrc2]} />
            </Link>
            </div>
          )
        })}
      </div>
    }

    {/* <div className="imageRow">
      <Project name="Import/Export" images={[require('../images/importexport1.png'), require('../images/importexport2.png'),]}></Project>
      <Project name="Typography" images={[require('../images/typo1.png'), require('../images/typo2.png')]}></Project>
      <Project name="New Years" images={[require('../images/newyears1.png'), require('../images/newyears2.png')]}></Project>
      <Project name="letter" images={[require('../images/letter1.png'), require('../images/letter2.png')]}></Project>
    </div> */}
  </Layout>
)

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            test
            test2
          }
        }
      }
    }
  }
`

export default IndexPage
