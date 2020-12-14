import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {Services} from "../../components/Services"
import {LayoutPage} from "../../layouts/Page"

export default ({data: {page, services}}) => {
  return (
    <LayoutPage page={page}>
      <Content>
        <Services services={services} />
      </Content>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export const query = graphql`
  query Services($path: String!, $locale: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
    services: allMarkdownRemark(
      filter: {fields: {locale: {eq: $locale}, template: {eq: "Service"}}}
    ) {
      ...ServicesFragment
    }
  }
`
