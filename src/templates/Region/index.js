import {graphql} from "gatsby"
import React from "react"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {Map} from "src/components/Map"
import {Title} from "src/components/Title"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
  const {coordinates} = page.frontmatter
  return (
    <LayoutPage page={page}>
      <Title id="titles.places_to_see" />
      <Map coordinates={coordinates} />
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export const query = graphql`
  query Region($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
      frontmatter {
        coordinates {
          title
          latitude
          longitude
          description
          color
          is_open
        }
      }
    }
  }
`
