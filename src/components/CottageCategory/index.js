import React, {PropTypes} from "react"
import {FormattedMessage, FormattedNumber} from "react-intl"

import styles from "./index.css"

const CottageCategory = ({cover, title, priceMin}) => {
  return (
    <div className={styles.cottage}>
      <img className={styles.image} src={cover} />
      <div className={styles.content}>
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

CottageCategory.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priceMin: PropTypes.number.isRequired,
}

export default CottageCategory
