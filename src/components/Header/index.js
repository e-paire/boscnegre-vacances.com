import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {Sticky} from "react-sticky"

import Nav from "components/Nav"
import TopBar from "components/TopBar"

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
    const {browser, cover, title} = this.props
    return (
      <header className={styles.header}>
        <Sticky className={styles.topBar} isActive={browser.greaterThan.m}>
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
      </header>
    )
  }
}

Header.propTypes = {
  browser: PropTypes.object.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default connect(
  ({browser}) => ({browser}),
)(Header)
