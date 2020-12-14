import {graphql} from "gatsby"
import React from "react"
import {Helmet} from "react-helmet"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

export default ({data: {page}}) => {
  return (
    <LayoutPage page={page} previousPage="Posts">
      <Helmet>
        <meta property="og:type" content="article" />
      </Helmet>
      {page.html && (
        <Content>
          <Html html={page.html} />
        </Content>
      )}
    </LayoutPage>
  )
}

export const query = graphql`
  query Post($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment

      frontmatter {
        tags
      }
    }
  }
`
