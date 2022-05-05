import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {Cottages} from "../../components/Cottages"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateCottagesCategory = ({data: {page}}) => {
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

export default TemplateCottagesCategory

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
