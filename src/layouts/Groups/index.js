import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import GroupsPurposes from "components/GroupsPurposes"
import Page from "layouts/Page"

const Groups = ({head, body, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head} />
      <GroupsPurposes cover={head.cover} />
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

Groups.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Groups
