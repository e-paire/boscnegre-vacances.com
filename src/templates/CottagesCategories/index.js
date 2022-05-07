import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {CtvWidget} from "../../components/CtvWidget"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateCottagesCategories = ({data: {page, cottagesCategories}}) => {
  return (
    <LayoutPage page={page}>
      <Content>
        <CtvWidget>
          {/* <ctv-product-list></ctv-product-list> */}
          <ctv-product data-product-id="105540"></ctv-product>
          <ctv-product data-product-id="63377"></ctv-product>
          <ctv-product data-product-id="63380"></ctv-product>
          <ctv-product data-product-id="63379"></ctv-product>
          <ctv-product data-product-id="63382"></ctv-product>
          <ctv-product data-product-id="108639"></ctv-product>
        </CtvWidget>
      </Content>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplateCottagesCategories

export const query = graphql`
  query CottagesCategories($path: String!, $locale: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
    cottagesCategories: allMarkdownRemark(
      filter: {
        fields: {locale: {eq: $locale}, template: {eq: "CottagesCategory"}}
      }
    ) {
      nodes {
        ...CottagesCategoryFragment
      }
    }
  }
`
