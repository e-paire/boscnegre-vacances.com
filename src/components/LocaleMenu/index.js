import React, {Component} from "react"
import {injectIntl, intlShape} from "react-intl"
import classNames from "classnames"
import {Icon} from "react-fa"
import {browserHistory} from "phenomic/lib/client"

import {locales} from "utils/intl"

import styles from "./index.css"

import FlagFr from "./assets/fr.png"
import FlagNl from "./assets/nl.png"

const FLAGS = {
  fr: FlagFr,
  nl: FlagNl,
}

class LocaleMenu extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  handleChangeLocale(locale) {
    browserHistory.push(`/${locale}`)
    this.handleClose()
  }

  render() {
    const {open} = this.state
    const {intl} = this.props
    return (
      <div className={styles.wrapper}>
        {open &&
          <div className={styles.overlay} onClick={this.handleClose} />
        }
        <div className={styles.menu}>
          <span className={styles.current} onClick={open ? this.handleClose : this.handleOpen}>
            <img className={styles.flag} src={FLAGS[intl.locale]} />
            <span className={styles.arrow}>
              <Icon name={`angle-${open ? "up" : "down"}`} />
            </span>
          </span>
          <div className={classNames(styles.dropdown, open && styles.dropdown_open)}>
            {locales
              .filter(locale => locale !== intl.locale)
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
  intl: intlShape.isRequired,
}

export default injectIntl(LocaleMenu)
