import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"

const TemplateHomepage = ({data: {page}}) => {
  return (
    <LayoutPage page={page} withBreadcrumb={false}>
      {/* <Content>
        <CottagesCategories
          cottagesCategories={cottagesCategories.nodes.map((node) => ({
            ...node.fields,
            ...node.frontmatter,
          }))}
        />
      </Content>
      <Content>
        <Services services={services} />
      </Content>
      <Groups groups={groups} /> */}
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export default TemplateHomepage

export const query = graphql`
  query Home($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
