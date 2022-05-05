import {graphql} from "gatsby"
import React from "react"

import {CarouselImages} from "../../components/CarouselImages"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {Image} from "../../components/Image"
import {Prices} from "../../components/Prices"
import {PricesExamples} from "../../components/PricesExamples"
import {Title} from "../../components/Title"
import {LayoutPage} from "../../layouts/Page"
import * as styles from "./index.module.css"

const TemplateSeminar = ({data: {page}}) => {
  const {images, prices, pricesExamples, services} = page.frontmatter
  return (
    <LayoutPage page={page} previousPage="Groups">
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
      <Content>
        {services &&
          services.map((service, i) => {
            const {alt, image} = service.cover
            return (
              <div key={i} className={styles.service}>
                <div className={styles.cover}>
                  <Image src={image} alt={alt} />
                </div>
                <div className={styles.content}>
                  <div className={styles.description}>
                    {service.description && <Html html={service.description} />}
                  </div>
                </div>
              </div>
            )
          })}

        <Title id="titles.room_layout" theme="yellow" />
        <CarouselImages images={images} theme="yellow" />
      </Content>
      {prices && <Prices {...prices} />}
      {pricesExamples && (
        <Content>
          <PricesExamples prices={pricesExamples} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplateSeminar

export const query = graphql`
  query Seminar($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
      frontmatter {
        images {
          image
          alt
        }
        prices {
          cover {
            image
            alt
          }
          text
          url
        }
        pricesExamples {
          description
          price
        }
        services {
          description
          cover {
            image
            alt
          }
        }
      }
    }
  }
`
