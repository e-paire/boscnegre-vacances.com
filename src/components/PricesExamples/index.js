import React, {PropTypes} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"

import Title from "components/Title"

import styles from "./index.css"

const PricesExamples = ({intl, prices}) => {
  return prices.length > 0
    ? <div>
        <Title id="titles.prices_examples" theme="yellow" />
        <div className={styles.wrapper}>
          <div className={styles.examples}>
            {prices.map((price, i) => (
              <div key={i} className={styles.example}>
                <div className={styles.description}>
                  {price.description}
                </div>
                <div className={styles.price}>
                  <FormattedMessage id="prices_examples.per_person" values={{
                    price: intl.formatNumber(price.price, {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    })
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    : null
}

PricesExamples.propTypes = {
  intl: intlShape.isRequired,
  prices: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })),
}

PricesExamples.defaultProps = {
  prices: [],
}

export default injectIntl(PricesExamples)
