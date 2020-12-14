import PropTypes from "prop-types"
import React, {Component} from "react"
import {FormattedMessage} from "react-intl"

import styles from "./index.module.css"

export const Title = ({id, theme}) => {
  return (
    <h2 className={styles[`title_${theme}`]}>
      <FormattedMessage id={id} defaultMessage={id} />
    </h2>
  )
}

Title.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["green", "yellow"]),
}

Title.defaultProps = {
  theme: "green",
}
