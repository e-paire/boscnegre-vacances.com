import PropTypes from "prop-types"
import React, {Component} from "react"

import {Cottage} from "../Cottage"
import * as styles from "./index.module.css"

export const Cottages = ({cottages}) => {
  return cottages && cottages.length > 0 ? (
    <div className={styles.cottages}>
      {cottages.map((cottage, index) => (
        <div key={index} className={styles.cottage}>
          <Cottage {...cottage} />
        </div>
      ))}
    </div>
  ) : null
}

Cottages.propTypes = {
  cottages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.shape({
        html: PropTypes.string,
      }),
      cover: PropTypes.shape({
        image: PropTypes.string,
        alt: PropTypes.string,
      }),
      beds: PropTypes.string,
      crush: PropTypes.string,
      ctoutvertId: PropTypes.number,
    })
  ).isRequired,
}
