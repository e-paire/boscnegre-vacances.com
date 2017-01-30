import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import PostPreview from "components/PostPreview"

import styles from "./index.css"

class Posts extends Component {
  render() {
    const {collection} = this.context
    const {intl, tag} = this.props
    const posts = enhanceCollection(collection, {
      filter: (page) => {
        const isLocalizedPost = customFilter(page, intl.locale, "Post")
        const hasTag = tag && Array.isArray(page.tags) && (page.tags.indexOf(tag) > -1)
        return tag
          ? isLocalizedPost && hasTag
          : isLocalizedPost
      },
      sort: "date",
      reverse: true,
    })

    return posts && posts.length > 0
    ? <div className={styles.posts}>
        {posts.map((post, i) => (
          <div key={i} className={styles.post}>
            <PostPreview {...post} />
          </div>
        ))}
      </div>
    : null
  }
}

Posts.contextTypes = {
  collection: PropTypes.array,
}

Posts.propTypes = {
  intl: intlShape.isRequired,
  tag: PropTypes.string,
}

export default injectIntl(Posts)
