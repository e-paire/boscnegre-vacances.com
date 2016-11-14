import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Content from "components/Content"
import Page from "layouts/Page"
import Cottages from "components/Cottages"

const CottagesCategory = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Cottages category={head.id} />
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

CottagesCategory.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
}

export default CottagesCategory
