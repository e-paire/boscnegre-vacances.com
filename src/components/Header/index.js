import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {Sticky} from "react-sticky"

import Nav from "components/Nav"
import TopBar from "components/TopBar"
import TopLogo from "components/TopLogo"
import Image from "components/Image"

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
        <TopBar
          onOpenNav={this.handleOpenNav}
        />
        <Sticky className={styles.logo} isActive={browser.greaterThan.m}>
          <TopLogo />
        </Sticky>
        {this.state.isNavOpen &&
          <div className={styles.navOverlay} onClick={this.handleCloseNav} />
        }
        <Sticky isActive={browser.greaterThan.m}>
          <Nav
            open={this.state.isNavOpen}
          />
        </Sticky>
        <div className={styles.photo}>
          {cover &&
            <Image src={cover.image} alt={cover.alt} />
          }
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
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
}

export default connect(
  ({browser}) => ({browser}),
)(Header)
