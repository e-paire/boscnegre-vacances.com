import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Icon} from "react-fa"

import Content from "components/Content"
import FlagFr from "components/FlagFr"
import FlagNl from "components/FlagNl"

import styles from "./index.css"

class TopBar extends Component {
  constructor() {
    super()

    this.handleOpenNav = this.handleOpenNav.bind(this)
  }

  handleOpenNav() {
    this.props.onOpenNav()
  }

  render() {
    return (
      <div className={styles.top}>
        <Content className={styles.content}>
          <div className={styles.navButton} onClick={this.handleOpenNav}>
            <Icon name="bars" />
          </div>
          <div className={styles.slogan}>
            {"Village de vacances Bosc-Nègre, 23 gîtes de charme dans le Perigord Noir"}
          </div>
          <div className={styles.email}>
            {"boscnegre@gmail.com"}
          </div>
          <div className={styles.phone}>
            {"05 53 40 99 27"}
          </div>
          <div className={styles.locales}>
            <Link className={styles.locale} to="/fr">
              <FlagFr className={styles.flag} />
            </Link>
            <Link className={styles.locale} to="/nl">
              <FlagNl className={styles.flag} />
            </Link>
          </div>
        </Content>
      </div>
    )
  }
}

TopBar.propTypes = {
  onOpenNav: PropTypes.func.isRequired,
}

export default TopBar
