import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import * as pageActions from "phenomic/lib/redux/modules/pages"

import Nav from "components/Nav"
import TopBar from "components/TopBar"
import HeaderImage from "./assets/header.png"

import styles from "./index.css"

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <TopBar />
        <Nav />
        <div className={styles.photo}>
          <img className={styles.image} src={HeaderImage} />
        </div>

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
