import {graphql} from "gatsby"
import React from "react"
import {Breadcrumb} from "src/components/Breadcrumb"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
  return (
    <LayoutPage page={page}>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export const query = graphql`
  query LegalNotices($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
