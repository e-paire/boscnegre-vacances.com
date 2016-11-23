import React, {PropTypes} from "react"
import {FormattedMessage, FormattedNumber} from "react-intl"

import styles from "./index.css"

const CottagesCategory = ({__url, cover, onClickOnImage, priceMin, title}) => {
  return (
    <div className={styles.category}>
      <img className={styles.image} src={cover} onClick={onClickOnImage} />
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
  cover: PropTypes.string.isRequired,
  onClickOnImage: PropTypes.func.isRequired,
  priceMin: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default CottagesCategory
