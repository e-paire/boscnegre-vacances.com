import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"
import Content from "components/Content"

import styles from "./index.css"

class Breadcrumb extends Component {
  renderElement({label, url}) {
    return (
      <li key={label} className={styles.element}>
        {url
          ? <Link activeClassName={styles.link_active} className={styles.link} to={url}>
              {label}
            </Link>
          : <span className={styles.link_active}>
              {label}
            </span>
        }
      </li>
    )
  }

  render() {
    const {collection} = this.context
    const {head, intl, items} = this.props

    const homePage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Homepage" && getLocale(c.__url) === intl.locale),
    }).shift()

    return (
      <Content>
        <nav className={styles.breadcrumb}>
          <ul className={styles.list}>
            {this.renderElement({
              label: homePage.navTitle ? homePage.navTitle : homePage.title,
              url: homePage.__url,
            })}
            {items.map((item) => {
              let element

              if (item.url && item.label) {
                element = item
              }
              else if (item.layout) {
                const page = enhanceCollection(collection, {
                  filter: (c) => (c.layout === item.layout && getLocale(c.__url) === intl.locale),
                }).shift()

                if (page) {
                  element = {
                    url: page && page.__url,
                    label: page.navTitle ? page.navTitle : page.title,
                  }
                }
              }

              return element
                ? this.renderElement(element)
                : null
            })}
            {this.renderElement({label: head.navTitle ? head.navTitle : head.title})}
          </ul>
        </nav>
      </Content>
    )
  }
}

Breadcrumb.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Breadcrumb.propTypes = {
  head: PropTypes.shape({
    navTitle: PropTypes.string,
    title: PropTypes.string,
  }),
  intl: intlShape.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    layout: PropTypes.string,
    url: PropTypes.string,
  })),
}

Breadcrumb.defaultProps = {
  items: [],
}

export default injectIntl(Breadcrumb)
