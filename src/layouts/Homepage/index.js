import React, {Component, PropTypes} from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import CottagesCategories from "components/CottagesCategories"
import PagesList from "../../components/PagesList"

const numberOfPosts = 6

class Homepage extends Component {
  render() {
    const {collection, store} = this.context
    const locale = store.getState().intl.locale

    const lastPosts = enhanceCollection(collection, {
      filter: {layout: "Post", locale},
      sort: "date",
    })
    .slice(0, numberOfPosts)

    return (
      <Page { ...this.props }>
        <CottagesCategories />
        <PagesList pages={lastPosts} />
      </Page>
    )
  }
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired,
}

export default Homepage
