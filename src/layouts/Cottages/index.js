import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Content from "components/Content"
import Page from "layouts/Page"
import CottagesCategories from "components/CottagesCategories"

const Services = ({body, ...props}) => {
  return (
    <Page {...props}>
      <Content>
        <CottagesCategories />
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

Services.propTypes = {
  body: PropTypes.object.isRequired,
}

export default Services
