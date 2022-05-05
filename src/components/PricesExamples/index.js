import PropTypes from "prop-types"
import React from "react"

import {Title} from "../Title"
import * as styles from "./index.module.css"

export const PricesExamples = ({prices}) => {
  return prices && prices.length > 0 ? (
    <div>
      <Title id="titles.prices_examples" theme="yellow" />
      <div className={styles.wrapper}>
        <div className={styles.examples}>
          {prices.map((price, i) => (
            <div key={i} className={styles.example}>
              <div className={styles.description}>{price.description}</div>
              <div className={styles.price}>{price.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
}

PricesExamples.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
}

PricesExamples.defaultProps = {
  prices: [],
}
