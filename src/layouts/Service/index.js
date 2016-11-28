import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"

const Service = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head}
          items={[
            {layout: "Services"},
          ]}
        />
        <CarouselImages images={head.images} />
        {body &&
          <BodyContainer>
            {body}
          </BodyContainer>
        }
      </Content>
    </Page>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service
