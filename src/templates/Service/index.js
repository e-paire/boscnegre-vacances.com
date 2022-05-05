import {graphql} from "gatsby"
import React from "react"

import {CarouselImages} from "../../components/CarouselImages"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateService = ({data: {page}}) => {
  const {images} = page.frontmatter
  return (
    <LayoutPage page={page} previousPage="Services">
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
      <Content>
        <CarouselImages images={images} />
      </Content>
    </LayoutPage>
  )
}

export default TemplateService

export const query = graphql`
  query Service($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
      frontmatter {
        images {
          image
          alt
        }
      }
    }
  }
`
