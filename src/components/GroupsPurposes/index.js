import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import {connect} from "react-redux"
import {Icon} from "react-fa"
import {Link} from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"

import Carousel from "components/Carousel"
import Content from "components/Content"
import Title from "components/Title"

import styles from "./index.css"

class GroupsPurposes extends Component {
  render() {
    const {collection} = this.context
    const {browser, intl} = this.props

    const groupsPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Groups" && getLocale(c.__url) === intl.locale),
    }).shift()

    const groups = enhanceCollection(collection, {
      filter: (c) => ((c.layout === "Group" || c.layout === "Seminar") && getLocale(c.__url) === intl.locale),
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
  intl: intlShape.isRequired,
}

export default connect(
  ({browser}) => ({browser}),
)(injectIntl(GroupsPurposes))
