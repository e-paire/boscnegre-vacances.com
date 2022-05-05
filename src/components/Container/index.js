import PropTypes from "prop-types"
import React from "react"

import * as styles from "./index.module.css"

export const Container = (props) => (
  <div className={styles.container}>{props.children}</div>
)

Container.propTypes = {
  children: PropTypes.node,
}
