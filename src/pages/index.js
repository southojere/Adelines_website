import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <Bio />
    <Leftnav />
    <h5 style={{ textAlign: 'center', color: '#ffc33e' }}>
      <u>Selected works</u>
    </h5>
    {
      <div className="imageRow">
        {data.allMarkdownRemark.edges.map(proj => {
          // let imageUrl = "../images/"+proj.node.frontmatter.imageOne;
          // console.log(require(imageUrl));
          console.log(proj.node.frontmatter.image.childImageSharp.fluid)
          return (
            // <Img key = {proj.node.id} fluid={'../images/typo1.png'} />

            <Project
              key={proj.node.id}
              name="Import/Export"
              images={[
                proj.node.frontmatter.image.childImageSharp.fluid,
                proj.node.frontmatter.image2.childImageSharp.fluid,
              ]}
            />
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
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
