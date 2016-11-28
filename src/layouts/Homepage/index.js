import React, {Component, PropTypes} from "react"

import Content from "components/Content"
import CottagesCategories from "components/CottagesCategories"
import GroupsPurposes from "components/GroupsPurposes"
import Page from "layouts/Page"
import Offers from "components/Offers"
import Services from "components/Services"

class Homepage extends Component {
  render() {
    const {head, ...props} = this.props
    return (
      <Page {...props} head={head}>
        <Content>
          <CottagesCategories />
        </Content>

        <Offers
          cover={head.offers.cover}
          url="/"
          text={head.offers.text}
        />

        <Content>
          <Services />
        </Content>

        <GroupsPurposes />
      </Page>
    )
  }
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
