import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"

import Page from "layouts/Page"

const AfterContact = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head} />
      </Content>
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

AfterContact.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default AfterContact
