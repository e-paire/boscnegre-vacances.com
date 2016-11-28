import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Map from "components/Map"
import Page from "layouts/Page"

const Region = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head} />
      </Content>
      <Map coordinates={head.coordinates} />
      <Content>
        {body &&
          <BodyContainer>
            {body}
          </BodyContainer>
        }
      </Content>
    </Page>
  )
}

Region.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Region
