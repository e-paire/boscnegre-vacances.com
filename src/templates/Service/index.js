import {graphql} from "gatsby"
import React from "react"
import {CarouselImages} from "src/components/CarouselImages"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
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
