import PropTypes from "prop-types"
import React from "react"
import {FormattedMessage, FormattedNumber} from "react-intl"

import Image from "components/Image"

import styles from "./index.css"

const CottagesCategory = ({__url, cover, onClickOnImage, priceMin, title}) => {
  return (
    <div className={styles.category}>
      <div className={styles.image} onClick={onClickOnImage}>
        {cover &&
          <Image src={cover.image} alt={cover.alt} />
        }
      </div>
      <a href={__url} className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.from}>
          <FormattedMessage id="cottage_category.from" />
        </div>
        <div className={styles.price}>
          <FormattedNumber value={priceMin} style="currency" currency="EUR" maximumFractionDigits={0} />
        </div>
        <div className={styles.from}>
          <FormattedMessage id="cottage_category.the_week" />
        </div>
      </a>
    </div>
  )
}

CottagesCategory.propTypes = {
  __url: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onClickOnImage: PropTypes.func.isRequired,
  priceMin: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default CottagesCategory
