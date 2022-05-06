import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet"

import {Container} from "../components/Container"
import {useSiteMetadata} from "../hooks/use-site-metadata"

const LayoutIndex = ({children, path}) => {
  const {siteUrl, title} = useSiteMetadata()
  const locale = path.startsWith("/nl") ? "nl" : "fr"
  return (
    <>
      <Helmet>
        <html lang={locale} />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" sizes="any" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={locale} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          property="google-site-verification"
          content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION}
        />
      </Helmet>
      <Container>{children}</Container>
    </>
  )
}

export default LayoutIndex

LayoutIndex.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
}
