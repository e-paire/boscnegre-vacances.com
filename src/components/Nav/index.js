import {useLocation} from "@reach/router"
import classNames from "classnames"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useCallback} from "react"

import {useLinks} from "../../hooks/use-links"
import {Content} from "../Content"
import * as styles from "./index.module.css"

export const Nav = ({open}) => {
  const links = useLinks()
  return (
    <div className={styles.wrapper}>
      <Content>
        <nav className={classNames(styles.nav, open && styles.nav_open)}>
          <ul className={styles.list}>
            {links.pages.Homepage && <NavItem item={links.pages.Homepage} />}
            {links.pages.CottagesCategories && (
              <NavItem
                item={links.pages.CottagesCategories}
                sublist={links.items.CottagesCategory}
              />
            )}
            {links.pages.Services && (
              <NavItem
                item={links.pages.Services}
                sublist={links.items.Service}
              />
            )}
            {links.pages.Photos && <NavItem item={links.pages.Photos} />}
            {links.pages.Region && <NavItem item={links.pages.Region} />}
            {links.pages.Groups && (
              <NavItem
                item={links.pages.Groups}
                sublist={
                  links.pages.Seminar
                    ? [links.pages.Seminar, ...links.items.Group]
                    : links.items.Group
                }
              />
            )}
            {links.pages.Posts && <NavItem item={links.pages.Posts} />}
            {links.pages.Contact && <NavItem item={links.pages.Contact} />}
          </ul>
        </nav>
      </Content>
    </div>
  )
}

const NavItem = ({item, sublist}) => {
  const location = useLocation()
  const isActive = useCallback(
    (path) => {
      location.pathname.replace(/(.+)\/$/, "$1") === path
    },
    [location]
  )
  return (
    <li className={styles.item}>
      <Link
        to={item.path}
        className={classNames(styles.link, {
          [styles.link_active]:
            isActive(item.path) ||
            (sublist && sublist.some((subitem) => isActive(subitem.path))),
        })}
      >
        {item.title}
      </Link>
      {sublist && sublist.length > 0 && (
        <ul className={styles.sublist}>
          {sublist.map((subitem, i) => (
            <li key={i} className={styles.item}>
              <Link
                className={styles.link}
                to={subitem.path}
                activeClassName={styles.link_active}
              >
                {subitem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
}
