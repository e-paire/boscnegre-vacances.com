import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import PostPreview from "components/PostPreview"

import styles from "./index.css"

class Posts extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props
    const posts = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Post"),
      sort: "date",
    })

    return posts.length > 0
    ? <div className={styles.post}>
        {posts.map((post, i) => (
          <div key={i}>
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
  posts: PropTypes.array,
}

Posts.defaultProps = {
  posts: [],
}

export default injectIntl(Posts)
