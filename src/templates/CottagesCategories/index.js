import {graphql} from "gatsby"
import React from "react"
import {Content} from "src/components/Content"
import {CottagesCategories} from "src/components/CottagesCategories"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page, cottagesCategories}}) => {
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
