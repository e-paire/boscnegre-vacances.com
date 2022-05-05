import {Link} from "gatsby"
import React, {Component} from "react"

import {useLinks} from "../../hooks/use-links"
import {Logo} from "../Logo"
import * as styles from "./index.module.css"

export const TopLogo = () => {
  const links = useLinks()
  return (
    <Link className={styles.wrapper} to={links.pages.Homepage.path}>
      <Logo className={styles.logo} />
    </Link>
  )
}
