import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const styleP = {
  color:'#f59bb0'
};

const mainPara = {
  marginBottom: '12%',
  color:'#f59bb0'
}

const titleStyle = {
  color:'rgb(255, 195, 62)',
  fontWeight:'normal'
};

const images = require.context('../images', true);

export default function Template({ data }) {
  const project = data.markdownRemark
  const markdw = project.frontmatter;
  const imageListResult = markdw.projectImages; // getting images

  //now need to parse into list based on ,
  const imageNameList = imageListResult.split(',');
  return (
    <Layout>
      <div className="blurbContainer">
        <h1 style={titleStyle}><u>{project.frontmatter.title}</u></h1>
        <p style= {styleP}><b>{project.frontmatter.smallDesc}</b></p>
        <p style={styleP}>{project.frontmatter.subDesc}</p>
        <div style={mainPara} dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
      {/* <div className="imageContainer">
        {projectImages}
      </div> */}
      <div className="imageContainer">
      {
        imageNameList.map(imagename => {
          return (
            <img key= {imagename} src={images(`./${imagename}`)}/>
          )
        })
      }
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
        test
        test2
        projectImages
      }
    }
  }
`
