import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
// images
import typo from '../images/typo1.png';

const IndexPage = ({ data }) => (
  <Layout>
    <Bio></Bio>
    <Leftnav></Leftnav>
    <h5 style={{ textAlign: 'center', color: '#ffc33e', }}><u>Selected works</u></h5>
    {

      <div className="imageRow">
        {
          data.allMarkdownRemark.edges.map((proj) => {
            // let imageUrl = "../images/"+proj.node.frontmatter.imageOne;
            // console.log(require(imageUrl));
            return (
              <Img key = {proj.node.id} fluid={'../images/typo1.png'} />
              // <Project key={proj.node.id} name="Import/Export" images={[typo, require('../images/importexport2.png'),]}></Project>
            );
          })
        }
      </div>

    }

    <div className="imageRow">
      <Project name="Import/Export" images={[require('../images/importexport1.png'), require('../images/importexport2.png'),]}></Project>
      <Project name="Typography" images={[require('../images/typo1.png'), require('../images/typo2.png')]}></Project>
      <Project name="New Years" images={[require('../images/newyears1.png'), require('../images/newyears2.png')]}></Project>
      <Project name="letter" images={[require('../images/letter1.png'), require('../images/letter2.png')]}></Project>
    </div>

  </Layout>
)

export const projectQuery = graphql`
  query ProjectIndexQuery{
      allMarkdownRemark{
        edges{
          node{
            id
            frontmatter {
              path
              title
              imageOne
              imageTwo
            }
          }
        }
      }
  }
`

export default IndexPage
