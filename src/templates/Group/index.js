import {graphql} from "gatsby"
import React from "react"

import {CarouselImages} from "../../components/CarouselImages"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {PricesExamples} from "../../components/PricesExamples"
import {Title} from "../../components/Title"
import {LayoutPage} from "../../layouts/Page"

const TemplateGroup = ({data: {page}}) => {
  const {imagesTitle, images, pricesExamples} = page.frontmatter
  return (
    <LayoutPage page={page} previousPage="Groups">
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
      <Content>
        {imagesTitle && <Title id={imagesTitle} theme="yellow" />}
        <CarouselImages images={images} theme="yellow" />
      </Content>
      {pricesExamples && (
        <Content>
          <PricesExamples prices={pricesExamples} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplateGroup

export const query = graphql`
  query Group($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment

      frontmatter {
        imagesTitle
        images {
          image
          alt
        }
        pricesExamples {
          description
          price
        }
      }
    }
  }
`
