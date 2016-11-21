import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Content from "components/Content"
import Map from "components/Map"
import Page from "layouts/Page"

const Region = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Map coordinates={head.coordinates} />
      <Content>
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

Region.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
}

export default Region
