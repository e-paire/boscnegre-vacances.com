import React, {Component, PropTypes} from "react"

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
          <img className={styles.image} src={this.props.cover} />
        </div>
        <BookingForm />
      </header>
    )
  }
}

Header.propTypes = {
  cover: PropTypes.string.isRequired,
}

export default Header
