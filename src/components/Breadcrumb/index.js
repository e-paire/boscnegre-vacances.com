import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Content} from "src/components/Content"
import {useLinks} from "src/hooks/use-links"

import styles from "./index.module.css"

const Item = ({title, path}) => (
  <li key={title} className={styles.element}>
    {path ? (
      <Link
        activeClassName={styles.link_active}
        className={styles.link}
        to={path}
      >
        {title}
      </Link>
    ) : (
      <span className={styles.link_active}>{title}</span>
    )}
  </li>
)

export const Breadcrumb = ({page, previous}) => {
  const links = useLinks()
  return (
    <Content>
      <nav className={styles.breadcrumb}>
        <ul className={styles.list}>
          <Item {...links.pages.Homepage} />
          {previous && <Item {...previous} />}
          {page && <Item title={page.title} />}
        </ul>
      </nav>
    </Content>
  )
}

Breadcrumb.propTypes = {
  head: PropTypes.shape({
    navTitle: PropTypes.string,
    title: PropTypes.string,
  }),

  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      layout: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

Breadcrumb.defaultProps = {
  items: [],
}
