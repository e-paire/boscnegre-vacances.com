import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Carousel from "components/Carousel"
import Cottage from "components/Cottage"
import Title from "components/Title"

import styles from "./index.css"

class Cottages extends Component {
  render() {
    const {category, currentLocale} = this.props
    const cottages = enhanceCollection(this.context.collection, {
      filter: {
        locale: currentLocale,
        layout: "Cottage",
        category: category,
      },
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
  currentLocale: PropTypes.string.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
)(Cottages)
