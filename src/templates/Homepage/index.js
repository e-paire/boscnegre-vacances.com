import {graphql} from "gatsby"
import React from "react"

import {Content} from "../../components/Content"
import {CottagesCategories} from "../../components/CottagesCategories"
import {Groups} from "../../components/Groups"
import {Html} from "../../components/Html"
import {Offers} from "../../components/Offers"
import {Services} from "../../components/Services"
import {LayoutPage} from "../../layouts/Page"

export default ({data: {page, services, groups, cottagesCategories}}) => {
  const {offers} = page.frontmatter
  return (
    <LayoutPage page={page} withBreadcrumb={false}>
      <Content>
        <CottagesCategories
          cottagesCategories={cottagesCategories.nodes.map((node) => ({
            ...node.fields,
            ...node.frontmatter,
          }))}
        />
      </Content>
      <Offers cover={offers.cover} text={offers.text} />
      <Content>
        <Services services={services} />
      </Content>
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
  query Home($path: String!, $locale: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
      frontmatter {
        offers {
          cover {
            image
            alt
          }
          text
        }
      }
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
    services: allMarkdownRemark(
      filter: {fields: {locale: {eq: $locale}, template: {eq: "Service"}}}
    ) {
      ...ServicesFragment
    }
    groups: allMarkdownRemark(
      filter: {fields: {locale: {eq: $locale}, template: {eq: "Group"}}}
    ) {
      ...GroupsFragment
    }
  }
`
