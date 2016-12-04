import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"

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
    </Page>
  )
}

Group.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Group
