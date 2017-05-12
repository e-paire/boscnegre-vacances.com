import PropTypes from "prop-types"
import React, {Component} from "react"
import {injectIntl, intlShape} from "react-intl"
import {Link} from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Logo from "components/Logo"

import styles from "./index.css"

class TopLogo extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props

    const homePage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Homepage"),
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
