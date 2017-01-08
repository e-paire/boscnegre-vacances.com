import React, {PropTypes} from "react"
import {StickyContainer} from "react-sticky"
import Helmet from "react-helmet"
import {joinUri} from "phenomic"

import BookingForm from "components/BookingForm"
import Content from "components/Content"
import Footer from "components/Footer"
import Header from "components/Header"

import styles from "./index.css"

const DEFAULT_META_TITLE = "Bosc Nègre"

const Page = ({children, footer, head, header}) => {
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
      content: joinUri(process.env.PHENOMIC_USER_URL, head.__url),
    },
    {property: "og:description", content: head.description},
    {name: "twitter:card", content: "summary"},
    {name: "twitter:title", content: metaTitle},
    {name: "twitter:description", content: head.description},
    {name: "description", content: head.description},
  ]

  return (
    <StickyContainer className={styles.page}>
      <Helmet
        title={metaTitle}
        meta={meta}
      />
      <Header cover={head.cover} slogan={head.slogan} title={head.title} {...head.header} />
      <div className={styles.contentWrapper}>
        <StickyContainer className={styles.content}>
          <BookingForm />
          <div className={styles.children}>
            {!head.cover && head.title &&
              <Content>
                <h1 className={styles.title}>
                  {head.title}
                </h1>
              </Content>
            }
            {header}
            {children}
            {footer}
          </div>
          <Footer />
        </StickyContainer>
      </div>
    </StickyContainer>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  head: PropTypes.object,
  header: PropTypes.element,
}

export default Page
