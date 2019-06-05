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

const SelectedWorksStyle = {
  textAlign: 'left',
  color: '#ffc33e',
  fontSize: '50px',
  fontWeight: 'normal',
  marginBottom: '66px',
}

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
}

const images = require.context('../images', true)
const IndexPage = ({ data }) => (
  <Layout>
    <Bio />
    <h5 style={SelectedWorksStyle}>
      <u>Selected works</u>
    </h5>
    <Popup
      modal
      overlayStyle={{ background: 'rgba(255,255,255,0.8' }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Hamburger open={open} />}
    >
      {close => <Menu close={close} store = {filterStore}/>}
    </Popup>
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
