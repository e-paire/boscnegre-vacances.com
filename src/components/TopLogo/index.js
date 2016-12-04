import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import {Link} from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"
import Logo from "components/Logo"

import styles from "./index.css"

class TopLogo extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props

    const homePage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Homepage" && getLocale(c.__url) === intl.locale),
    }).shift()

    return (
      <Link className={styles.wrapper} to={homePage && homePage.__url}>
        <Logo className={styles.logo} />
      </Link>
    )
  }
}

TopLogo.contextTypes = {
  collection: PropTypes.array.isRequired,
}

TopLogo.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TopLogo)
