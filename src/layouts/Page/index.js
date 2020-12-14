import {graphql} from "gatsby"
import Img from "gatsby-image"
import React from "react"
import {Helmet} from "react-helmet"
import {Breadcrumb} from "src/components/Breadcrumb"
import {Content} from "src/components/Content"
import {Footer} from "src/components/Footer"
import Header from "src/components/Header"
import {useLinks} from "src/hooks/use-links"
import {useSiteMetadata} from "src/hooks/use-site-metadata"

import styles from "./index.module.css"

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
