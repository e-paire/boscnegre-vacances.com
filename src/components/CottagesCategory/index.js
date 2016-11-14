import React, {PropTypes} from "react"
import {FormattedMessage, FormattedNumber} from "react-intl"

import styles from "./index.css"

const CottagesCategory = ({cover, onClickOnContent, onClickOnImage, priceMin, title}) => {
  return (
    <div className={styles.category}>
      <img className={styles.image} src={cover} onClick={onClickOnImage} />
      <div className={styles.content} onClick={onClickOnContent}>
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
      </div>
    </div>
  )
}

CottagesCategory.propTypes = {
  cover: PropTypes.string.isRequired,
  onClickOnContent: PropTypes.func.isRequired,
  onClickOnImage: PropTypes.func.isRequired,
  priceMin: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default CottagesCategory
