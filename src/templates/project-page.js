import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const styleP = {
  color:'#f59bb0'
};

const titleStyle = {
  color:'rgb(255, 195, 62)',
  fontWeight:'normal'
};


export default function Template({ data }) {
  const project = data.markdownRemark

  return (
    <Layout>
      {/* <Link to="">Go back</Link> */}
      <div className="blurbContainer">
        <h1 style={titleStyle}><u>{project.frontmatter.title}</u></h1>
        <p style= {styleP}><b>{project.frontmatter.smallDesc}</b></p>
        <p style={styleP}>{project.frontmatter.subDesc}</p>
        <div style={styleP} dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
      <div className="imageContainer">
        <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.image2.childImageSharp.fluid} />
      </div>
    </Layout>
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
`
