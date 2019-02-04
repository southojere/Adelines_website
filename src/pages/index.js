import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import ProjectSection from '../components/projectsection'
import FilterTagMenu from '../components/filtertagmenu'
import { graphql } from 'gatsby'
import 'animate.css/animate.min.css'
import filterStore from '../store/store'
import { view } from 'react-easy-state'

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
    <FilterTagMenu store={filterStore} />
    <ProjectSection projectFilter={filterStore.filter} store={filterStore} />
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

export default view(IndexPage)
