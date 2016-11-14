import React, {Component, PropTypes} from "react"
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
    const ServicesPage = enhanceCollection(collection, {
      filter: {layout: "Services", locale: this.props.currentLocale},
    }).shift()

    const CottagesPage = enhanceCollection(collection, {
      filter: {layout: "Cottages", locale: this.props.currentLocale},
    }).shift()

    return (
      <div>
        {this.props.open &&
          <div className={styles.overlay} onClick={this.handleCloseNav} />
        }
        <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
          <Content className={styles.content}>
            <div className={styles.first}>
              <Link className={styles.item} to="/">{"Home"}</Link>
              <Link className={styles.item} to={CottagesPage && CottagesPage.__url || "/"}>
                {"Les gîtes"}
              </Link>
              <Link className={styles.item} to={ServicesPage && ServicesPage.__url || "/"}>
                {"Activités"}
              </Link>
              <Link className={styles.item} to="/">{"Photos"}</Link>
            </div>
            <div className={styles.last}>
              <Link className={styles.item} to="/">{"La région"}</Link>
              <Link className={styles.item} to="/">{"Groupes"}</Link>
              <Link className={styles.item} to="/">{"Les news"}</Link>
              <Link className={styles.item} to="/">{"Contact"}</Link>
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
