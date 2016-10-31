import React, {PropTypes} from "react"

import ImageCottage from "./assets/cottage.png"
import styles from "./index.css"

const Cottage = ({cover, title, description}) => {
  return (
    <div className={styles.cottage}>
      <img className={styles.image} src={cover} />
      <div className={styles.content}>
        {title}
        <br />
        {description}
      </div>
    </div>
  )
}

Cottage.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

Cottage.defaultProps = {
  cover: ImageCottage,
  title: "",
  description: "",
}

export default Cottage
