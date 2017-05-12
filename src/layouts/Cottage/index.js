import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"

const Cottage = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head}
        items={[
          {layout: "Cottages"},
        ]}
      />
      {body &&
        <Content childrenIsText>
          <BodyContainer>
            {body}
          </BodyContainer>
        </Content>
      }
    </Page>
  )
}

Cottage.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Cottage
