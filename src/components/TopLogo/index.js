import React, {Component} from "react"
import {injectIntl, intlShape} from "react-intl"
import {Link} from "react-router"

import Logo from "components/Logo"

import styles from "./index.css"

class TopLogo extends Component {
  render() {
    return (
      <Link className={styles.wrapper} to={`/${this.props.intl.locale}`}>
        <Logo className={styles.logo} />
      </Link>
    )
  }
}

TopLogo.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TopLogo)
