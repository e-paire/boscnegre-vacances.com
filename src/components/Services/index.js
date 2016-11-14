import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Service from "components/Service"
import Title from "components/Title"

import styles from "./index.css"

class Services extends Component {
  render() {
    const {collection} = this.context

    const services = enhanceCollection(collection, {
      filter: {layout: "Service", locale: this.props.currentLocale},
      sort: "order",
    })

    return services.length > 0 ? (
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
  currentLocale: PropTypes.string.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
)(Services)
