import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import Cottages from "components/Cottages"

const CottagesCategory = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head}
        items={[
          {layout: "Cottages"},
        ]}
      />
      <Content>
        <Cottages category={head.route} />
      </Content>
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

CottagesCategory.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default CottagesCategory
