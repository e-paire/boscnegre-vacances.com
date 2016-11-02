import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {Icon} from "react-fa"
import {browserHistory} from "phenomic/lib/client"

import {setLocale} from "actions/intl"

import styles from "./index.css"

import FlagFr from "./assets/fr.png"
import FlagNl from "./assets/nl.png"
import FlagEn from "./assets/en.png"

const LOCALES = ["fr", "nl", "en"]
const FLAGS = {
  fr: FlagFr,
  nl: FlagNl,
  en: FlagEn,
}

class LocaleMenu extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  handleChangeLocale(locale) {
    this.props.updateLocale(locale)
    this.handleClose()
  }

  render() {
    const {store} = this.context
    const {open} = this.state
    const currentLocale = store.getState().intl.locale
    return (
      <div className={styles.menu} onMouseLeave={this.handleClose}>
        <span className={styles.current} onMouseEnter={this.handleOpen}>
          <img className={styles.flag} src={FLAGS[currentLocale]} />
          <span className={styles.arrow}>
            <Icon name="angle-down" />
          </span>
        </span>
        <div className={styles[`dropdown_${open ? "open" : "close"}`]}>
          {LOCALES
            .filter(locale => locale !== currentLocale)
            .map(locale =>
              <div key={locale} className={styles.locale} onClick={() => this.handleChangeLocale(locale)}>
                <img className={styles.flag} src={FLAGS[locale]} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

LocaleMenu.contextTypes = {
  store: PropTypes.object.isRequired,
}

LocaleMenu.propTypes = {
  updateLocale: PropTypes.func.isRequired,
}

export default connect(
  null,
  dispatch => ({
    updateLocale: (locale) => {
      dispatch(setLocale(locale))
      browserHistory.push("/")
    },
  })
)(LocaleMenu)
