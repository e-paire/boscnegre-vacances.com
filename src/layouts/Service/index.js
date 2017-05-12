import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"

const Service = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head}
        items={[
          {layout: "Services"},
        ]}
      />
      {body &&
        <Content childrenIsText>
          <BodyContainer>
            {body}
          </BodyContainer>
        </Content>
      }
      <Content>
        <CarouselImages images={head.images} />
      </Content>
    </Page>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service
