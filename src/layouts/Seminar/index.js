import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"
import Prices from "components/Prices"
import PricesExamples from "components/PricesExamples"
import Title from "components/Title"

import styles from "./index.css"

const Seminar = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head}
          items={[
            {layout: "Groups"},
          ]}
        />
        {body &&
          <BodyContainer>
            {body}
          </BodyContainer>
        }
      </Content>
      <Content>
        {head.services && head.services.map((service, i) => {
          return (
            <div key={i} className={styles.service}>
              <div className={styles.cover}>
                <img className={styles.image} src={service.image.src} alt={service.image.alt} />
              </div>
              <div className={styles.content}>
                <div className={styles.description}>
                  {service.description}
                </div>
              </div>
            </div>
          )
        })}

        <Title id="titles.room_layout" theme="yellow" />
        <CarouselImages images={head.images} theme="yellow" />
      </Content>
      {head.prices &&
        <Prices
          image={head.prices.image}
          url="/"
          text={head.prices.text}
        />
      }
      <Content>
        <PricesExamples prices={head.pricesExamples} />
      </Content>
    </Page>
  )
}

Seminar.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,

}

export default Seminar
