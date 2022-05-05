import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Icon} from "react-fa"

import {Content} from "../Content"
import {FlagFr} from "../FlagFr"
import {FlagNl} from "../FlagNl"
import * as styles from "./index.module.css"

export const TopBar = ({onOpenNav, slogan}) => {
  return (
    <div className={styles.top}>
      <Content className={styles.content}>
        <div className={styles.navButton} onClick={onOpenNav}>
          <Icon name="bars" />
        </div>
        <div className={styles.slogan}>{slogan}</div>
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
          <Link className={styles.locale} to="/">
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

TopBar.propTypes = {
  onOpenNav: PropTypes.func.isRequired,
  slogan: PropTypes.string,
}

TopBar.defaultProps = {
  slogan:
    "Village de vacances Bosc-Nègre, 23 gîtes de charme dans le Perigord Noir",
}
