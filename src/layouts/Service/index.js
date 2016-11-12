import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Content from "components/Content"
import Page from "layouts/Page"

const Service = ({body, ...props}) => {
  return (
    <Page {...props}>
      <Content>
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

Service.propTypes = {
  body: PropTypes.string,
}

export default Service
