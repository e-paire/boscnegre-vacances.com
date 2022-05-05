import {graphql} from "gatsby"
import React from "react"

import {Breadcrumb} from "../../components/Breadcrumb"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateLegalNotices = ({data: {page}}) => {
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

export default TemplateLegalNotices

export const query = graphql`
  query LegalNotices($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
