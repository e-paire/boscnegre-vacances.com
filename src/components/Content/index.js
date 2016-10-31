import React, {PropTypes} from "react"
import classNames from "classnames"

import styles from "./index.css"

const Content = (props) => (
  <div className={classNames(styles.content, props.className)}>
    {props.children}
  </div>
)

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Content
