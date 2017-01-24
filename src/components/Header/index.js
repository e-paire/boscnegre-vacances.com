import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {Sticky} from "react-sticky"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Nav from "components/Nav"
import TopBar from "components/TopBar"
import TopLogo from "components/TopLogo"
import Image from "components/Image"
import TextLink from "components/TextLink"

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
    const {collection} = this.context
    const {browser, cover, intl, layoutToLink, slogan, text, title} = this.props

    const PageToLink = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, layoutToLink),
    }).shift()

    return (
      <header className={styles.header}>
        <TopBar
          onOpenNav={this.handleOpenNav}
          slogan={slogan}
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
        {cover &&
          <div className={styles.photo}>
            <Image src={cover.image} alt={cover.alt} sizes={["256", "512", "1024", "2048"]}/>
            {title &&
              <h1 className={styles.title}>{title}</h1>
            }
            {text && PageToLink &&
              <div className={styles.text}>
                <TextLink text={text} url={PageToLink.__url} />
              </div>
            }
          </div>
        }
      </header>
    )
  }
}

Header.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Header.propTypes = {
  browser: PropTypes.object.isRequired,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  intl: intlShape.isRequired,
  layoutToLink: PropTypes.string,
  slogan: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default connect(
  ({browser}) => ({browser}),
)(injectIntl(Header))
