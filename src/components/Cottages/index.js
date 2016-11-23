import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"

import Carousel from "components/Carousel"
import Cottage from "components/Cottage"
import Title from "components/Title"

import styles from "./index.css"

class Cottages extends Component {
  render() {
    const {category, intl} = this.props
    const cottages = enhanceCollection(this.context.collection, {
      filter: (c) => (c.layout === "Cottage"
        && c.category === category
        && getLocale(c.__url) === intl.locale),
      sort: "number",
    })

    return cottages.length > 0
      ? <div>
          <Title id="titles.cottages" />
          <Carousel>
            {cottages.map((cottage, index) => (
              <div key={index}
                className={classNames(styles.category, index % 2 == 0 && styles.even)}
              >
                <Cottage {...cottage} />
              </div>
            ))}
          </Carousel>
        </div>
      : null
  }
}

Cottages.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Cottages.propTypes = {
  category: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Cottages)
