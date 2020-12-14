import {graphql} from "gatsby"
import React from "react"
import {Breadcrumb} from "src/components/Breadcrumb"
import {ContactForm} from "src/components/ContactForm"
import {Content} from "src/components/Content"
import {Html} from "src/components/Html"
import {LayoutPage} from "src/layouts/page"

import styles from "./index.module.css"

export default ({data: {page}}) => {
  return (
    <LayoutPage page={page}>
      <Content className={styles.content}>
        {page.html && (
          <div className={styles.text}>
            <Html html={page.html} />
          </div>
        )}
        <div className={styles.form}>
          <ContactForm />
        </div>
      </Content>
    </LayoutPage>
  )
}

export const query = graphql`
  query Contact($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
