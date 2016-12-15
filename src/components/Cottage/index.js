import React, {PropTypes} from "react"
import {Icon} from "react-fa"
import {FormattedMessage} from "react-intl"
import {BodyContainer} from "phenomic"

import Image from "components/Image"

import styles from "./index.css"

const Cottage = ({beds, crush, cover, ctoutvertId, description, title}) => {
  return (
    <div className={styles.cottage}>
      <div className={styles.cover}>
        <Image src={cover.image} alt={cover.alt} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <BodyContainer className={styles.description}>
          {description}
        </BodyContainer>
        <div className={styles.meta}>
          {beds &&
            <div className={styles.box}>
              <Icon className={styles.bed} name="bed" />
              {beds}
            </div>
          }
          {crush &&
            <div className={styles.box}>
              <Icon className={styles.heart} name="heart" />
              {crush}
            </div>
          }
        </div>
        <a className={styles.button} href={`https://premium.secureholiday.net/fr/14230/product.popup?idProduct=${ctoutvertId}`}>
          <FormattedMessage id="buttons.check_prices" />
        </a>
      </div>
    </div>
  )
}

Cottage.propTypes = {
  beds: PropTypes.string,
  crush: PropTypes.string,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  ctoutvertId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
