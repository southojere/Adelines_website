import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Template({ data }) {
  const project = data.markdownRemark

  return (
    <div>
      <Link>Go back</Link>
      <h1>{project.frontmatter.title}</h1>
      <p>{project.frontmatter.smallDesc}</p>
      <h4>{project.frontmatter.subDesc}</h4>
      <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subDesc
        smallDesc
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
      }
    }
  }
`
