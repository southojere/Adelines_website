const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const projectTemplate = path.resolve('src/templates/project-page.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              subDesc
            }
          }
        }
      }
    }
  `).then(res => {
      if(res.errors) {
          return Promise.reject(res.errors)
      }
      res.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
              path: node.frontmatter.path,
              component: projectTemplate
          })
      });
  })
}
