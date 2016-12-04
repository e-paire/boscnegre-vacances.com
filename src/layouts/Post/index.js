import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"

const Post = ({head, body, ...props}) => (
  <Page {...props} head={head}>
    <Content>
      <Breadcrumb head={head}
        items={[
          {layout: "Posts"},
        ]}
      />
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

Post.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Post
