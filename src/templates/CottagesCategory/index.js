import {graphql} from "gatsby"
import React from "react"
import {Content} from "src/components/Content"
import {Cottages} from "src/components/Cottages"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
  const {cottages} = page.frontmatter
  return (
    <LayoutPage page={page} previousPage="CottagesCategories">
      <Content>
        <Cottages cottages={cottages} />
      </Content>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export const query = graphql`
  query CottagesCategory($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment

      frontmatter {
        cottages {
          title
          description
          cover {
            image
            alt
          }
          beds
          crush
          ctoutvertId
        }
      }
    }
  }
`
