import React, {Component, PropTypes} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {IndexLink, Link} from "react-router"
import classNames from "classnames"

import {getLocale} from "utils/intl"

import Content from "components/Content"

import styles from "./index.css"

class Nav extends Component {
  constructor() {
    super()

    this.handleCloseNav = this.handleCloseNav.bind(this)
  }

  handleCloseNav() {
    this.props.onCloseNav()
  }

  render() {
    const {collection, router} = this.context
    const {intl} = this.props

    const cottagesPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Cottages" && getLocale(c.__url) === intl.locale),
    }).shift()

    const cottagesCategories = enhanceCollection(collection, {
      filter: (c) => (c.layout === "CottagesCategory" && getLocale(c.__url) === intl.locale),
    })

    const servicesPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Services" && getLocale(c.__url) === intl.locale),
    }).shift()

    const services = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Service" && getLocale(c.__url) === intl.locale),
    })

    const photosPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Photos" && getLocale(c.__url) === intl.locale),
    }).shift()

    const regionPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Region" && getLocale(c.__url) === intl.locale),
    }).shift()

    const groupsPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Groups" && getLocale(c.__url) === intl.locale),
    }).shift()

    const groups = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Group" && getLocale(c.__url) === intl.locale),
    })

    const newsPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "News" && getLocale(c.__url) === intl.locale),
    }).shift()

    const contactPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Contact" && getLocale(c.__url) === intl.locale),
    }).shift()

    return (
      <div className={styles.wrapper}>
        {this.props.open &&
          <div className={styles.overlay} onClick={this.handleCloseNav} />
        }
        <Content>
          <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <IndexLink to={`/${intl.locale}`} className={classNames(styles.link, {
                  [styles.link_active]: router.isActive("/") || router.isActive(`/${intl.locale}`),
                })}>
                  <FormattedMessage id="nav.home" />
                </IndexLink>
              </li>
              <li className={styles.item}>
                <Link to={cottagesPage && cottagesPage.__url} className={classNames(styles.link, {
                  [styles.link_active]: cottagesPage && router.isActive(cottagesPage.__url)
                    || cottagesCategories.some(category => router.isActive(category.__url)),
                })}>
                {cottagesPage
                  ? (cottagesPage.navTitle
                    ? cottagesPage.navTitle
                    : cottagesPage.title
                  )
                  : <FormattedMessage id="nav.cottages" />
                }
                </Link>
                {cottagesCategories.length > 0 &&
                  <ul className={styles.sublist}>
                    {cottagesCategories.map((category, i) => (
                      <li key={i} className={styles.item}>
                        <Link className={styles.link} to={category.__url} activeClassName={styles.link_active}>
                          {category.navTitle ? category.navTitle : category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
              </li>
              <li className={styles.item}>
                <Link to={servicesPage && servicesPage.__url} className={classNames(styles.link, {
                  [styles.link_active]: servicesPage && router.isActive(servicesPage.__url)
                    || services.some(service => router.isActive(service.__url)),
                })}>
                {servicesPage
                  ? (servicesPage.navTitle
                    ? servicesPage.navTitle
                    : servicesPage.title
                  )
                  : <FormattedMessage id="nav.services" />
                }
                </Link>
                {services.length > 0 &&
                  <ul className={styles.sublist}>
                    {services.map((service, i) => (
                      <li key={i} className={styles.item}>
                        <Link className={styles.link} to={service.__url} activeClassName={styles.link_active}>
                          {service.navTitle ? service.navTitle : service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={photosPage && photosPage.__url} activeClassName={styles.link_active}>
                  {photosPage
                    ? (photosPage.navTitle
                      ? photosPage.navTitle
                      : photosPage.title
                    )
                    : <FormattedMessage id="nav.photos" />
                  }
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={regionPage && regionPage.__url} activeClassName={styles.link_active}>
                  {regionPage
                    ? (regionPage.navTitle
                      ? regionPage.navTitle
                      : regionPage.title
                    )
                    : <FormattedMessage id="nav.region" />
                  }
                </Link>
              </li>
              <li className={styles.item}>
                <Link to={groupsPage && groupsPage.__url} activeClassName={styles.link_active} className={classNames(styles.link, {
                  [styles.link_active]: groupsPage && router.isActive(groupsPage.__url)
                    || groups.some(group => router.isActive(group.__url)),
                })}>
                {groupsPage
                  ? (groupsPage.navTitle
                    ? groupsPage.navTitle
                    : groupsPage.title
                  )
                  : <FormattedMessage id="nav.groups" />
                }
                </Link>
                {groups.length > 0 &&
                  <ul className={styles.sublist}>
                    {groups.map((group, i) => (
                      <li key={i} className={styles.item}>
                        <Link className={styles.link} to={group.__url} activeClassName={styles.link_active}>
                          {group.navTitle ? group.navTitle : group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={newsPage && newsPage.__url} activeClassName={styles.link_active}>
                  {newsPage
                    ? (newsPage.navTitle
                      ? newsPage.navTitle
                      : newsPage.title
                    )
                    : <FormattedMessage id="nav.news" />
                  }
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={contactPage && contactPage.__url} activeClassName={styles.link_active}>
                  {contactPage
                    ? (contactPage.navTitle
                      ? contactPage.navTitle
                      : contactPage.title
                    )
                    : <FormattedMessage id="nav.contact" />
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </Content>
      </div>
    )
  }
}

Nav.propTypes = {
  intl: intlShape,
  onCloseNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

Nav.contextTypes = {
  collection: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
}

export default injectIntl(Nav)
