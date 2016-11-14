import React, {PropTypes} from "react"
import Helmet from "react-helmet"
import {joinUri} from "phenomic"

import Header from "components/Header"
import Footer from "components/Footer"

import styles from "./index.css"

const DEFAULT_META_TITLE = "Bosc Nègre"

const Page = ({__url, children, footer, head, header}) => {
  const metaTitle = head.metaTitle
    ? head.metaTitle
    : head.title
      ? head.title
      : DEFAULT_META_TITLE

  const meta = [
    {property: "og:type", content: "article"},
    {property: "og:title", content: metaTitle},
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    {property: "og:description", content: head.description},
    {name: "twitter:card", content: "summary"},
    {name: "twitter:title", content: metaTitle},
    {name: "twitter:description", content: head.description},
    {name: "description", content: head.description},
    {name: "robots", content: "noindex"},
  ]

  return (
    <div className={styles.page}>
      <Helmet
        title={metaTitle}
        meta={meta}
      />
      <Header cover={head.cover} title={head.title} />
      <div className={styles.content}>
        {header}
        {children}
        {footer}
      </div>
      <Footer />
    </div>
  )
}

Page.propTypes = {
  __url: PropTypes.string.isRequired,
  children: PropTypes.node,
  footer: PropTypes.element,
  head: PropTypes.object.isRequired,
  header: PropTypes.element,
}

export default Page
