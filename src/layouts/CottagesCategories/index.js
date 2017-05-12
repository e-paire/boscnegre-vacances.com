import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import CottagesCategories from "components/CottagesCategories"

const CottagesCategoriesPage = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head} />
      <Content>
        <CottagesCategories />
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

CottagesCategoriesPage.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default CottagesCategoriesPage
