import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"

import Page from "layouts/Page"

const AfterContact = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head} />
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

AfterContact.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default AfterContact
