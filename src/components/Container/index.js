import PropTypes from "prop-types"
import React from "react"

import styles from "./index.module.css"

export const Container = (props) => (
  <div className={styles.container}>{props.children}</div>
)

Container.propTypes = {
  children: PropTypes.node,
}
