import React, {PropTypes} from "react"
import {Icon} from "react-fa"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import {BodyContainer} from "phenomic"

import {getUrl} from "utils/urls"
import ExternalLink from "components/ExternalLink"
import Image from "components/Image"

import styles from "./index.css"

const Cottage = ({beds, crush, cover, description, ctoutvertId, intl, title}) => {
  return (
    <div className={styles.cottage}>
      <div className={styles.cover}>
        <Image src={cover.image} alt={cover.alt} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          {description &&
            <BodyContainer className={styles.description}>
              {description}
            </BodyContainer>
          }
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
        </div>
        <ExternalLink className={styles.button} href={`${getUrl("secureholiday", intl.locale)}/product.popup?idProduct=${ctoutvertId}`}>
          <FormattedMessage id="buttons.check_prices" />
        </ExternalLink>
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
  ctoutvertId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  title: PropTypes.string.isRequired,
}

export default injectIntl(Cottage)
