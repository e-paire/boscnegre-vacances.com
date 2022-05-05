import {graphql} from "gatsby"
import React from "react"
import {Helmet} from "react-helmet"

import {Breadcrumb} from "../../components/Breadcrumb"
import {Content} from "../../components/Content"
import {Footer} from "../../components/Footer"
import Header from "../../components/Header"
import {useLinks} from "../../hooks/use-links"
import {useSiteMetadata} from "../../hooks/use-site-metadata"
import * as styles from "./index.module.css"

export const LayoutPage = ({
  page: {
    fields: {path},
    frontmatter: {
      cover,
      metaDescription,
      header,
      metaTitle,
      navTitle,
      slogan,
      title,
    },
    html,
  },
  previousPage,
  children,
  withBreadcrumb,
}) => {
  const {siteUrl} = useSiteMetadata()
  const links = useLinks()
  return (
    <>
      <Helmet>
        <title>{metaTitle || title}</title>
        <meta property="og:title" content={metaTitle || title} />
        <meta property="og:url" content={siteUrl + path} />
        <meta property="og:description" content={metaTitle || title} />
        <meta name="twitter:title" content={metaTitle || title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className={styles.page}>
        <Header
          title={title}
          cover={cover}
          slogan={slogan}
          text={header?.text}
          layoutToLink={header?.layoutToLink}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.children}>
              {!cover && title && (
                <Content>
                  <h1 className={styles.title}>{title}</h1>
                </Content>
              )}
              {withBreadcrumb && (
                <Breadcrumb
                  previous={links.pages[previousPage]}
                  page={{path, title: navTitle || title}}
                />
              )}
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

LayoutPage.defaultProps = {
  withBreadcrumb: true,
}

export const query = graphql`
  fragment PageFragment on MarkdownRemark {
    fields {
      path
    }
    frontmatter {
      cover {
        image
        alt
      }
      title
      metaTitle
      navTitle
      metaDescription
      slogan
      header {
        text
        layoutToLink
      }
    }
    html
  }
`
