import {graphql} from "gatsby"
import React from "react"
import {Breadcrumb} from "src/components/Breadcrumb"
import {Content} from "src/components/Content"
import {Groups} from "src/components/Groups"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page, groups}}) => {
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
