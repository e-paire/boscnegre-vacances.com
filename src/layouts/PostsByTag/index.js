import React, {PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import PostsList from "components/Posts"

const PostsByTag = ({body, intl, params, ...props}) => {
  const tag = params.tag
  const head = {
    navTitle: tag,
    title: intl.formatMessage({id: "postsByTags.title"}, {tag}),
    description: intl.formatMessage({id: "postsByTags.description"}, {tag}),
  }
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head}
        items={[
          {layout: "Posts"},
        ]}
      />
      {body &&
        <Content childrenIsText>
          <BodyContainer>
            {body}
          </BodyContainer>
        </Content>
      }
      <Content>
        <PostsList tag={tag} />
      </Content>
    </Page>
  )
}

PostsByTag.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object,
  intl: intlShape.isRequiered,
  params: PropTypes.object.isRequired,
}

export default injectIntl(PostsByTag)
