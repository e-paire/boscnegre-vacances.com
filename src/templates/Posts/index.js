import {graphql} from "gatsby"
import React from "react"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {Posts} from "src/components/Posts"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page, posts}}) => {
  return (
    <LayoutPage page={page}>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
      <Content>
        <Posts posts={posts} />
      </Content>
    </LayoutPage>
  )
}

export const query = graphql`
  query Posts($path: String!, $locale: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
    posts: allMarkdownRemark(
      filter: {fields: {locale: {eq: $locale}, template: {eq: "Post"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      ...PostsFragment
    }
  }
`
