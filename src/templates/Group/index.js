import {graphql} from "gatsby"
import React from "react"
import {CarouselImages} from "src/components/CarouselImages"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {PricesExamples} from "src/components/PricesExamples"
import {Title} from "src/components/Title"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
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
