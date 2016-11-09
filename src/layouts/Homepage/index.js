import React, {Component, PropTypes} from "react"

import CottagesCategories from "components/CottagesCategories"
import Content from "components/Content"
import ImageLink from "components/ImageLink"
import Page from "layouts/Page"
import Title from "components/Title"

class Homepage extends Component {
  render() {
    const {head} = this.props
    return (
      <Page {...this.props}>
        <Content>
          <CottagesCategories />
        </Content>

        <Title id="home.our_offers" theme="yellow" />
        <ImageLink
          src={head.offersCover}
          text={head.offersText}
          url="/"
        />
      </Page>
    )
  }
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
