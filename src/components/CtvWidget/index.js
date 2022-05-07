import React from "react"

import * as styles from "./index.module.css"

export const CtvWidget = ({children}) => {
  return <div className={styles.ctvWidget}>{children}</div>
}
