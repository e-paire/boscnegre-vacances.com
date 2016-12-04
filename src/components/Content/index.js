import React, {PropTypes} from "react"
import classNames from "classnames"

import styles from "./index.css"

const Content = ({className, children, childrenIsText}) => (
  <div className={classNames({
    [styles.contentText]: childrenIsText,
    [styles.contentNoText]: !childrenIsText,
  }, className)}>
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

export default Content
