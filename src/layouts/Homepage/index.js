import React, {Component} from "react"

import Page from "../Page"
import CottagesCategories from "components/CottagesCategories"

class Homepage extends Component {
  render() {
    return (
      <Page {...this.props}>
        <CottagesCategories />
      </Page>
    )
  }
}

export default Homepage
