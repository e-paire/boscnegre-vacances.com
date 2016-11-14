import React, {PropTypes} from "react"

import styles from "./index.css"

const Cottage = ({cover, title}) => {
  return (
    <div className={styles.category}>
      <img className={styles.image} src={cover} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )
}

Cottage.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
