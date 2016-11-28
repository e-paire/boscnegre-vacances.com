import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import CottagesCategories from "components/CottagesCategories"

const Services = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head} />
        <CottagesCategories />
        {body &&
          <BodyContainer>
            {body}
          </BodyContainer>
        }
      </Content>
    </Page>
  )
}

Services.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Services
