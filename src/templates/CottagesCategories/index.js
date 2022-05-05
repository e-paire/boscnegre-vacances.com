import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {CottagesCategories} from "../../components/CottagesCategories"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateCottagesCategories = ({data: {page, cottagesCategories}}) => {
  return (
    <LayoutPage page={page}>
      <Content>
        <CottagesCategories
          cottagesCategories={cottagesCategories.nodes.map((node) => ({
            ...node.fields,
            ...node.frontmatter,
          }))}
        />
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
