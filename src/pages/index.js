import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from '@reach/router'

const SelectedWorksStyle = {
  textAlign: 'left',
  color: '#ffc33e',
  fontSize: '50px',
  fontWeight: 'normal',
  marginBottom: '66px',
}

const images = require.context('../images', true)
const IndexPage = ({ data }) => (
  <Layout>
    <Bio />
    {/* <Leftnav /> */}
    <h5 style={SelectedWorksStyle}>
      <u>Selected works</u>
    </h5>
    {
      <div className="imageRow">
        {/* Go through all project and create its thumbnail on the home */}
        {data.allMarkdownRemark.edges.map(proj => {
          const nameOfImageOne = proj.node.frontmatter.test
          const nameOfImageTwo = proj.node.frontmatter.test2
          let imagesrc = images(`./${nameOfImageOne}`) //should return name of image
          let imagesrc2 = images(`./${nameOfImageTwo}`) //should return name of image
          return (
            <div key={proj.node.id}>
              <Link to={proj.node.frontmatter.path}>
                <Project
                  name={proj.node.frontmatter.title}
                  images={[imagesrc, imagesrc2]}
                />
              </Link>
            </div>
          )
        })}
      </div>
    }
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
