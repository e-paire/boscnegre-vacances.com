import React from "react"

import * as styles from "./index.module.css"

export const Html = ({html}) => {
  return (
    <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
  )
}
