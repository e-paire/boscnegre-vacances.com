import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"

import styles from "./index.css"

class Title extends Component {
  render() {
    const {id, theme} = this.props
    return (
      <h2 className={styles[`title_${theme}`]}>
        <FormattedMessage id={id} />
      </h2>
    )
  }
}

Title.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["green", "yellow"]),
}

Title.defaultProps = {
  theme: "green",
}

export default Title
