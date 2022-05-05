import {graphql} from "gatsby"
import React from "react"

import {CarouselImages} from "../../components/CarouselImages"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {Title} from "../../components/Title"
import {LayoutPage} from "../../layouts/Page"

const TemplatePhotos = ({data: {page}}) => {
  const {gallery} = page.frontmatter
  return (
    <LayoutPage page={page}>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
      <Content>
        {gallery &&
          gallery.map((item, i) => {
            const theme = i % 2 === 0 ? "yellow" : "green"
            return (
              <div key={i}>
                {item.title && <Title id={item.title} theme={theme} />}
                <CarouselImages images={item.images} theme={theme} />
              </div>
            )
          })}
      </Content>
    </LayoutPage>
  )
}

export default TemplatePhotos

export const query = graphql`
  query Photos($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment

      frontmatter {
        gallery {
          title
          images {
            image
            alt
          }
        }
      }
    }
  }
`
