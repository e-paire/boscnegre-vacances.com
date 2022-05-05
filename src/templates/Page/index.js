import {graphql} from "gatsby"
import React from "react"

import {Breadcrumb} from "../../components/Breadcrumb"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplatePage = ({data: {page}}) => {
  return (
    <LayoutPage page={page}>
      {/* <Breadcrumb head={head} /> */}
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplatePage

export const query = graphql`
  query Page($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
