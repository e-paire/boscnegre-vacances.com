import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {Icon} from "react-fa"
import {Link} from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Carousel from "components/Carousel"
import Content from "components/Content"
import Title from "components/Title"

import styles from "./index.css"

class GroupsPurposes extends Component {
  render() {
    const {collection} = this.context
    const {browser, currentLocale} = this.props

    const groupsPage = enhanceCollection(collection, {
      filter: {layout: "Groups", locale: currentLocale},
    }).shift()

    const groups = enhanceCollection(collection, {
      filters: [
        {layout: "Group", locale: currentLocale},
        {layout: "Seminar", locale: currentLocale},
      ],
      sort: "order",
    })

    return groups.length > 0
      ? <div>
          <Title id="titles.group_holidays" theme="yellow" />
          {groupsPage &&
            <img className={styles.cover} src={groupsPage.cover} />
          }
          <div className={styles.groups}>
            <Content>
              <Carousel noArrows={browser.greaterThan.s} noKeys={browser.lessThan.m} theme="yellow">
                {groups.map((group, index) => (
                  <Link key={index} to={group.__url}>
                    <div className={styles.group}>
                      <div className={styles.icon}>
                        <Icon name={group.icon} />
                      </div>
                      <div className={styles.title}>
                        {group.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Content>
          </div>
        </div>
      : null
  }
}

GroupsPurposes.contextTypes = {
  collection: PropTypes.array.isRequired,
}

GroupsPurposes.propTypes = {
  browser: PropTypes.object.isRequired,
  currentLocale: PropTypes.string.isRequired,
}

export default connect(
  ({browser, intl}) => ({
    browser,
    currentLocale: intl.locale,
  }),
)(GroupsPurposes)
