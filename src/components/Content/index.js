import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import styles from "./index.module.css"

export const Content = ({className, children, childrenIsText}) => (
  <div
    className={classNames(
      {
        [styles.contentText]: childrenIsText,
        [styles.contentNoText]: !childrenIsText,
      },
      className
    )}
  >
    {children}
  </div>
)

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  childrenIsText: PropTypes.bool,
}

Content.defaultProps = {
  childrenIsText: false,
}
