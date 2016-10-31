import React, {PropTypes} from "react"

import ImageCottage from "./assets/cottage.png"
import styles from "./index.css"

const Cottage = ({title, description}) => {
  return (
    <div className={styles.cottage}>
      <img className={styles.image} src={ImageCottage} />
      <div className={styles.content}>
        {title}
        <br />
        {description}
      </div>
    </div>
  )
}

Cottage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Cottage.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Cottage
