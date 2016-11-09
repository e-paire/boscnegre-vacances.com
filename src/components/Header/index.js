import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import * as pageActions from "phenomic/lib/redux/modules/pages"

import Nav from "components/Nav"
import TopBar from "components/TopBar"
import BookingForm from "components/BookingForm"
import HeaderImage from "./assets/header.png"

import styles from "./index.css"

class Header extends Component {
  constructor() {
    super()

    this.state = {
      isNavOpen: false,
    }

    this.handleOpenNav = this.handleOpenNav.bind(this)
    this.handleCloseNav = this.handleCloseNav.bind(this)
  }

  handleOpenNav() {
    this.setState({isNavOpen: true})
  }

  handleCloseNav() {
    this.setState({isNavOpen: false})
  }

  render() {
    return (
      <header className={styles.header}>
        <TopBar
          onOpenNav={this.handleOpenNav}
        />
        <Nav
          open={this.state.isNavOpen}
          onCloseNav={this.handleCloseNav}
        />
        <div className={styles.photo}>
          <img className={styles.image} src={HeaderImage} />
        </div>
        <BookingForm />
      </header>
    )
  }
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Header.propTypes = {
  getPage: PropTypes.func.isRequired,
}

export default connect(
  null,
  dispatch => ({
    getPage: (...args) => dispatch(pageActions.get(...args)),
  })
)(Header)
