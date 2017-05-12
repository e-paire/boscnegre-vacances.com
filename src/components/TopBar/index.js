import PropTypes from "prop-types"
import React, {Component} from "react"
import {Link} from "react-router"
import {Icon} from "react-fa"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
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
    const {collection} = this.context
    const {slogan} = this.props

    const homePageFr = enhanceCollection(collection, {
      filter: (page) => customFilter(page, "fr", "Homepage"),
    }).shift()

    const homePageNl = enhanceCollection(collection, {
      filter: (page) => customFilter(page, "nl", "Homepage"),
    }).shift()

    return (
      <div className={styles.top}>
        <Content className={styles.content}>
          <div className={styles.navButton} onClick={this.handleOpenNav}>
            <Icon name="bars" />
          </div>
          <div className={styles.slogan}>
            {slogan}
          </div>
          <a
            className={styles.email}
            href="mailto:info@boscnegre-vacances.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"info@boscnegre-vacances.com"}
          </a>
          <a
            className={styles.phone}
            href="tel:+33553409927"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"05 53 40 99 27"}
          </a>
          <div className={styles.locales}>
            {homePageFr &&
              <Link className={styles.locale} to={homePageFr.__url}>
                <FlagFr className={styles.flag} />
              </Link>
            }
            {homePageNl &&
              <Link className={styles.locale} to={homePageNl.__url}>
                <FlagNl className={styles.flag} />
              </Link>
            }
          </div>
        </Content>
      </div>
    )
  }
}

TopBar.contextTypes = {
  collection: PropTypes.array.isRequired,
}

TopBar.propTypes = {
  onOpenNav: PropTypes.func.isRequired,
  slogan: PropTypes.string,
}

TopBar.defaultProps = {
  slogan: "Village de vacances Bosc-Nègre, 23 gîtes de charme dans le Perigord Noir"
}

export default TopBar
