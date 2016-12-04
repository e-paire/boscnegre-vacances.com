import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import PostsList from "components/Posts"

const Posts = ({body, head, ...props}) => {
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
      <Content>
        <PostsList />
      </Content>
    </Page>
  )
}

Posts.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Posts
