import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"

const Service = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <CarouselImages images={head.images} />
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
}

export default Service
