import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project from '../components/project'
import filterStore from '../store/store'
import { view } from 'react-easy-state'

const images = require.context('../images', true)
/**
 * Loads and displays projects from .md files
 */
class ProjectSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store,
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query ProjectIndexQuery2 {
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
        `}
        render={data => (
          <>
            <div className="imageRow">
              {/* Go through all project and create its thumbnail on the home */}
              {data.allMarkdownRemark.edges.map(proj => {
                const filter = proj.node.frontmatter.filters.split(',')
                if (
                  filter.find(e => e === this.props.projectFilter) ||
                  this.state.store.filter === ''
                ) {
                  const nameOfImageOne = proj.node.frontmatter.test
                  const nameOfImageTwo = proj.node.frontmatter.test2
                  let imagesrc = images(`./${nameOfImageOne}`) //should return name of image
                  let imagesrc2 = images(`./${nameOfImageTwo}`)
                  return (
                    <div key={proj.node.id}>
                      <Project
                        name={proj.node.frontmatter.title}
                        images={[imagesrc, imagesrc2]}
                        link={proj.node.frontmatter.path}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </>
        )}
      />
    )
  }
}

export default view(ProjectSection)
