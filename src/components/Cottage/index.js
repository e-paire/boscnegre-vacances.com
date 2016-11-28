import React, {PropTypes} from "react"
import {Icon} from "react-fa"

import Image from "components/Image"

import styles from "./index.css"

const Cottage = ({beds, crush, cover, description, title}) => {
  return (
    <div className={styles.cottage}>
      <div className={styles.cover}>
        <Image src={cover.image} alt={cover.alt} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.meta}>
          {beds &&
            <div className={styles.box}>
              <Icon className={styles.bed} name="bed" />
              {beds}
            </div>
          }
          {crush &&
            <div className={styles.box}>
              <Icon className={styles.heart} name="heart" />
              {crush}
            </div>
          }
        </div>
        <a className={styles.button} href="#">
          {"Consulter les tarifs"}
        </a>
      </div>
    </div>
  )
}

Cottage.propTypes = {
  beds: PropTypes.string,
  crush: PropTypes.string,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
