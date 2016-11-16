import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {connect} from "react-redux"
import {Link} from "react-router"
import classNames from "classnames"

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
    const servicesPage = enhanceCollection(collection, {
      filter: {layout: "Services", locale: this.props.currentLocale},
    }).shift()

    const cottagesPage = enhanceCollection(collection, {
      filter: {layout: "Cottages", locale: this.props.currentLocale},
    }).shift()

    const groupsPage = enhanceCollection(collection, {
      filter: {layout: "Groups", locale: this.props.currentLocale},
    }).shift()

    return (
      <div>
        {this.props.open &&
          <div className={styles.overlay} onClick={this.handleCloseNav} />
        }
        <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
          <Content className={styles.content}>
            <div className={styles.first}>
              <Link className={styles.item} to="/">
                <FormattedMessage id="nav.home" defaultMessage="Home" />
              </Link>
              <Link className={styles.item} to={cottagesPage && cottagesPage.__url}>
                <FormattedMessage id="nav.cottages" />
              </Link>
              <Link className={styles.item} to={servicesPage && servicesPage.__url}>
                <FormattedMessage id="nav.services" />
              </Link>
              <Link className={styles.item} to="/">
                <FormattedMessage id="nav.photos" />
              </Link>
            </div>
            <div className={styles.last}>
              <Link className={styles.item} to="/">
                <FormattedMessage id="nav.region" />
              </Link>
              <Link className={styles.item} to={groupsPage && groupsPage.__url}>
                <FormattedMessage id="nav.groups" />
              </Link>
              <Link className={styles.item} to="/">
                <FormattedMessage id="nav.news" />
              </Link>
              <Link className={styles.item} to="/">
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
  currentLocale: PropTypes.string.isRequired,
  onCloseNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

Nav.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
)(Nav)
