import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"
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
    </Page>
  )
}

Group.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Group
