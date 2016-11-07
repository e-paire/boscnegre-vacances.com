import React, {Component, PropTypes} from "react"
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
    return (
      <div>
        {this.props.open &&
          <div className={styles.overlay} onClick={this.handleCloseNav} />
        }
        <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
          <Content className={styles.content}>
            <div className={styles.first}>
              <Link className={styles.item} to="/">{"Home"}</Link>
              <Link className={styles.item} to="/">{"Les gîtes"}</Link>
              <Link className={styles.item} to="/">{"Activités"}</Link>
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
  onCloseNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Nav
