import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import Tags from "components/Tags"

const Post = ({head, body, ...props}) => (
  <Page {...props} head={head}>
    <Breadcrumb head={head}
      items={[
        {layout: "Posts"},
      ]}
    />
    <Content>
      <Tags tags={head.tags} />
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
