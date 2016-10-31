import React, {Component} from "react"
import {Link} from "react-router"

import Content from "components/Content"

import styles from "./index.css"

class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Content className={styles.content}>
          <div className={styles.left}>
            <Link className={styles.item} to="/">{"Home"}</Link>
            <Link className={styles.item} to="/">{"Les gîtes"}</Link>
            <Link className={styles.item} to="/">{"Activités"}</Link>
            <Link className={styles.item} to="/">{"Photos"}</Link>
          </div>
          <div className={styles.right}>
            <Link className={styles.item} to="/">{"La région"}</Link>
            <Link className={styles.item} to="/">{"Groupes"}</Link>
            <Link className={styles.item} to="/">{"Les news"}</Link>
            <Link className={styles.item} to="/">{"Contact"}</Link>
          </div>
        </Content>
      </nav>
    )
  }
}

export default Nav
