import React, {PropTypes} from "react"

import styles from "./index.css"

const Service = ({cover, title}) => {
  return (
    <div className={styles.service}>
      <img className={styles.image} src={cover} />
      <div className={styles.overlay} />
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

Service.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Service
