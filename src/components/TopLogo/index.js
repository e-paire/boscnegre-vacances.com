import {Link} from "gatsby"
import React, {Component} from "react"
import {Logo} from "src/components/Logo"
import {useLinks} from "src/hooks/use-links"

import styles from "./index.module.css"

export const TopLogo = () => {
  const links = useLinks()
  return (
    <Link className={styles.wrapper} to={links.pages.Homepage.path}>
      <Logo className={styles.logo} />
    </Link>
  )
}
