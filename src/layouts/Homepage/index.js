import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import CottagesList from "../../components/CottagesList"
import PagesList from "../../components/PagesList"

const numberOfCottages = 6
const numberOfPosts = 6

class Homepage extends Component {
  render() {
    const {collection, store} = this.context
    const locale = store.getState().intl.locale
    const cottages = enhanceCollection(collection, {
      filter: {layout: "Cottage", locale},
      sort: "number",
    })
    .slice(0, numberOfCottages)

    const lastPosts = enhanceCollection(collection, {
      filter: {layout: "Post", locale},
      sort: "date",
    })
    .slice(0, numberOfPosts)

    return (
      <Page { ...this.props }>
        <h2><FormattedMessage id="latest_cottages" /></h2>
        <CottagesList cottages={cottages} />
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
