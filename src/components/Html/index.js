import React from "react"

import styles from "./index.module.css"

export const Html = ({html}) => {
  return (
    <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
  )
}
