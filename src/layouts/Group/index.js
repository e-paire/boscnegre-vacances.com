import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"
import PricesExamples from "components/PricesExamples"
import Title from "components/Title"

const Group = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head}
        items={[
          {layout: "Groups"},
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
        {head.imagesTitle && <Title id={head.imagesTitle} theme="yellow" />}
        <CarouselImages images={head.images} theme="yellow" />
      </Content>
      {head.pricesExamples &&
        <Content>
          <PricesExamples prices={head.pricesExamples} />
        </Content>
      }
    </Page>
  )
}

Group.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Group
