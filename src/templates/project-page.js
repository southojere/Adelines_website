import React from 'react';
import { Link } from 'gatsby'

export default function Template({data}) {
    const project = data.markdownRemark;


    return(
        <div>
            <Link>Go back</Link>
            <h1>{project.frontmatter.title}</h1>
            <p>{project.frontmatter.smallDesc}</p>
            <h4>{project.frontmatter.subDesc}</h4>
            <div dangerouslySetInnerHTML = {{__html:project.html}}></div>
        </div>
    )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String){
      markdownRemark(frontmatter: { path: {eq: $path} }){
        html
        frontmatter {
            path
            title
            subDesc
            smallDesc
        }
      }
  }
`