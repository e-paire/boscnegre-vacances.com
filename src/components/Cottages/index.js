import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Cottage from "components/Cottage"

import styles from "./index.css"

class Cottages extends Component {
  render() {
    const {category_route, intl} = this.props
    const cottages = enhanceCollection(this.context.collection, {
      filter: (page) => customFilter(page, intl.locale, "Cottage")
        && page.cottages_category_route === category_route,
      sort: "position",
    })

    return cottages.length > 0
      ? <div>
          {cottages.map((cottage, index) => (
            <div key={index}
              className={classNames(styles.cottage, index % 2 == 0 && styles.even)}
            >
              <Cottage {...cottage} />
            </div>
          ))}
        </div>
      : null
  }
}

Cottages.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Cottages.propTypes = {
  category_route: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Cottages)
