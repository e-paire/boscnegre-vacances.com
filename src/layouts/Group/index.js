import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Content from "components/Content"
import Page from "layouts/Page"

const Group = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <BodyContainer>
          {body}
        </BodyContainer>
      </Content>
    </Page>
  )
}

Group.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
}

export default Group
