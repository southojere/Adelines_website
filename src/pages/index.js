import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import ProjectSection from '../components/projectsection'
import { graphql } from 'gatsby'
import 'animate.css/animate.min.css'
import filterStore from '../store/store'
import Menu from '../components/menu'
import Hamburger from '../components/hamburger'
import { view } from 'react-easy-state'
import Popup from 'reactjs-popup'
import LandingSection from '../components/landingSection';



const images = require.context('../images', true)
const IndexPage = ({ data }) => (
  <div>
    {/* <Layout>
      <ProjectSection projectFilter={filterStore.filter} store={filterStore} />
    </Layout> */}
    <LandingSection></LandingSection></div>
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

export default view(IndexPage)
