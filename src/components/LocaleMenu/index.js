import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {browserHistory} from "phenomic/lib/client"

import {setLocale} from "actions/intl"

import styles from "./index.css"

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
    const locale = store.getState().intl.locale
    return (
      <div className={styles.menu} onMouseLeave={this.handleClose}>
        <div className={styles.current} onMouseEnter={this.handleOpen}>{locale}</div>
        <div className={styles[`dropdown_${open ? "open" : "close"}`]}>
          <div className={styles.locale} onClick={() => this.handleChangeLocale("fr")}>{"fr"}</div>
          <div className={styles.locale} onClick={() => this.handleChangeLocale("nl")}>{"nl"}</div>
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
