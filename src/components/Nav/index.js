import React, {Component, PropTypes} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {Link} from "react-router"
import classNames from "classnames"

import {getLocale} from "utils/intl"

import Content from "components/Content"

import styles from "./index.css"

class Nav extends Component {
  constructor() {
    super()

    this.handleCloseNav = this.handleCloseNav.bind(this)
  }

  handleCloseNav() {
    this.props.onCloseNav()
  }

  render() {
    const {collection} = this.context
    const {intl} = this.props

    const servicesPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Services" && getLocale(c.__url) === intl.locale),
    }).shift()

    const cottagesPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Cottages" && getLocale(c.__url) === intl.locale),
    }).shift()

    const groupsPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Groups" && getLocale(c.__url) === intl.locale),
    }).shift()

    const regionPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Region" && getLocale(c.__url) === intl.locale),
    }).shift()

    return (
      <div>
        {this.props.open &&
          <div className={styles.overlay} onClick={this.handleCloseNav} />
        }
        <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
          <Content className={styles.content}>
            <div className={styles.first}>
              <Link className={styles.item} to={`/${intl.locale}`}>
                <FormattedMessage id="nav.home" />
              </Link>
              <Link className={styles.item} to={cottagesPage && cottagesPage.__url}>
                <FormattedMessage id="nav.cottages" />
              </Link>
              <Link className={styles.item} to={servicesPage && servicesPage.__url}>
                <FormattedMessage id="nav.services" />
              </Link>
              <Link className={styles.item}>
                <FormattedMessage id="nav.photos" />
              </Link>
            </div>
            <div className={styles.last}>
              <Link className={styles.item} to={regionPage && regionPage.__url}>
                <FormattedMessage id="nav.region" />
              </Link>
              <Link className={styles.item} to={groupsPage && groupsPage.__url}>
                <FormattedMessage id="nav.groups" />
              </Link>
              <Link className={styles.item}>
                <FormattedMessage id="nav.news" />
              </Link>
              <Link className={styles.item}>
                <FormattedMessage id="nav.contact" />
              </Link>
            </div>
          </Content>
        </nav>
      </div>
    )
  }
}

Nav.propTypes = {
  intl: intlShape,
  onCloseNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

Nav.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default injectIntl(Nav)
