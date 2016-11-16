import React, {Component, PropTypes} from "react"
import {Sticky} from "react-sticky"

import Nav from "components/Nav"
import TopBar from "components/TopBar"
import BookingForm from "components/BookingForm"

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
    const {cover, title} = this.props
    return (
      <header className={styles.header}>
        <Sticky className={styles.topBar}>
          <TopBar
            onOpenNav={this.handleOpenNav}
          />
          <Nav
            open={this.state.isNavOpen}
            onCloseNav={this.handleCloseNav}
          />
        </Sticky>
        <div className={styles.photo}>
          <img className={styles.image} src={cover} />
          {title &&
            <h1 className={styles.title}>{title}</h1>
          }
        </div>
        <BookingForm />
      </header>
    )
  }
}

Header.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Header
