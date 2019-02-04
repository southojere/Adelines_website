import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Leftnav from '../components/leftnav'
import Project from '../components/project'
import ProjectSection from '../components/projectsection'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from '@reach/router'
import "animate.css/animate.min.css";
import filterStore from '../store/store'

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
    <h5 style={SelectedWorksStyle}>
      <u>Selected works</u>
    </h5>
    {filterStore.changeFilter('print')}
    <ProjectSection></ProjectSection>
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
            filters
          }
        }
      }
    }
  }
`

export default IndexPage
