import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Service from "components/Service"
import Title from "components/Title"

import styles from "./index.css"

class Services extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props
    const services = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Service"),
      sort: "position",
    })

    return services && services.length > 0 ? (
      <div>
        <Title id="titles.discover_services" />
        <div className={styles.services}>
        {services.map((service, index) => (
          <Link to={service.__url} key={index} className={styles.service}>
            <Service {...service} />
          </Link>
        ))}
        </div>
      </div>
    )
    : null
  }
}

Services.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Services.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Services)
