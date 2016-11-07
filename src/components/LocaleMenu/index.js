import React, {Component, PropTypes} from "react"
import classNames from "classnames"
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
    const {open} = this.state
    const {currentLocale} = this.props
    return (
      <div className={styles.wrapper}>
        {open &&
          <div className={styles.overlay} onClick={this.handleClose} />
        }
        <div className={styles.menu}>
          <span className={styles.current} onClick={open ? this.handleClose : this.handleOpen}>
            <img className={styles.flag} src={FLAGS[currentLocale]} />
            <span className={styles.arrow}>
              <Icon name={`angle-${open ? "up" : "down"}`} />
            </span>
          </span>
          <div className={classNames(styles.dropdown, open && styles.dropdown_open)}>
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
      </div>
    )
  }
}

LocaleMenu.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  updateLocale: PropTypes.func.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
  dispatch => ({
    updateLocale: (locale) => {
      dispatch(setLocale(locale))
      browserHistory.push("/")
    },
  })
)(LocaleMenu)
