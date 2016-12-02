import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"
import PostPreview from "components/PostPreview"

class Posts extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props
    const posts = enhanceCollection(collection, {
      filter: (c) => (c.layout === "Post" && getLocale(c.__url) === intl.locale),
    })

    return posts.length > 0
    ? <div>
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
