import PropTypes from "prop-types"
import React from "react"

import Image from "components/Image"

import styles from "./index.css"

const Service = ({cover, title}) => {
  return (
    <div className={styles.service}>
      {cover &&
        <Image className={styles.image} src={cover.image} alt={cover.alt} />
      }
      <div className={styles.overlay} />
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

Service.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
}

export default Service
