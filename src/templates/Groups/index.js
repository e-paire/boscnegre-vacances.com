import {graphql} from "gatsby"
import React from "react"

import {Breadcrumb} from "../../components/Breadcrumb"
import {Content} from "../../components/Content"
import {Groups} from "../../components/Groups"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateGroups = ({data: {page, groups}}) => {
  return (
    <LayoutPage page={page}>
      <Groups groups={groups} />
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplateGroups

export const query = graphql`
  query Groups($path: String!, $locale: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
    groups: allMarkdownRemark(
      filter: {fields: {locale: {eq: $locale}, template: {eq: "Group"}}}
    ) {
      ...GroupsFragment
    }
  }
`
