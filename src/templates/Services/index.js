import {graphql} from "gatsby"
import React from "react"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {Services} from "src/components/Services"
import {LayoutPage} from "src/layouts/page"

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
