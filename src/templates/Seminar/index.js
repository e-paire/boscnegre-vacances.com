import {graphql} from "gatsby"
import React from "react"
import {CarouselImages} from "src/components/CarouselImages"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {Image} from "src/components/Image"
import {Prices} from "src/components/Prices"
import {PricesExamples} from "src/components/PricesExamples"
import {Title} from "src/components/Title"
import {LayoutPage} from "src/layouts/page"

import styles from "./index.module.css"

export default ({data: {page}}) => {
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
