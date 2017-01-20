import React, {PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"

import Tags from "components/Tags"

const TagsAll = ({intl}, {collection}) => {
  const posts = enhanceCollection(collection, {
    filter: (page) => customFilter(page, intl.locale, "Post"),
  })
  const tags = posts.reduce((prev, post) => {
    const postTags = post.tags || []
    return [...new Set([...prev, ...postTags])] // Remove duplicates
  }, [])
  return tags && tags.length > 0
    ? <Tags tags={tags} />
    : null
}

TagsAll.contextTypes = {
  collection: PropTypes.array.isRequired,
}

TagsAll.propTypes = {
  intl: intlShape.isRequired,
}

TagsAll.defaultProps = {
  tags: [],
}

export default injectIntl(TagsAll)
