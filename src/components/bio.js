import React, { Component } from 'react'
import Typist from 'react-typist'
import { StaticQuery, graphql } from 'gatsby'
class Bio extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteBioQuery {
            site {
              siteMetadata {
                description
              }
            }
          }
        `}
        render={data => (
          <>
            <div style={{ marginBottom: '5em' }}>
              <span className="bio">
                A graphic designer with a huge love <br />
                for{' '}
              </span>
              <Typist className="bio">
                {data.site.siteMetadata.description
                  .split(',')
                  .map(statement => {
                    return (
                      <span key={statement.length}> {/** FIXME: statement.length isnt a good unique id */}
                        <span>{statement}</span>
                        <Typist.Backspace count={statement.length} delay={200} />
                      </span>
                    )
                  })}
              </Typist>
            </div>
          </>
        )}
      />
    )
  }
}

export default Bio
