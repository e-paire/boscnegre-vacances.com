import {graphql} from "gatsby"
import React from "react"

import {Breadcrumb} from "../../components/Breadcrumb"
import {ContactForm} from "../../components/ContactForm"
import {Content} from "../../components/Content"
import {Html} from "../../components/Html"
import {LayoutPage} from "../../layouts/Page"
import * as styles from "./index.module.css"

const TemplateContact = ({data: {page}}) => {
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

export default TemplateContact

export const query = graphql`
  query Contact($path: String!) {
    page: markdownRemark(fields: {path: {eq: $path}}) {
      ...PageFragment
    }
  }
`
