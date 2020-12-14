import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {Map} from "../../components/Map"
import {Title} from "../../components/Title"
import {LayoutPage} from "../../layouts/Page"

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
