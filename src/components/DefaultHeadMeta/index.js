import React, {PropTypes} from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, {metadata: {pkg}}) => (
  <div hidden>
    <Helmet
      meta={[
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        {property: "og:site_name", content: pkg.name},
        {name: "twitter:site", content: `@${ pkg.twitter }`},
      ]}
    />
    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={[
        {name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no"},
        {name: "google-site-verification", content: pkg.universalAnalytics},
      ]}
    />
    { /* favicons */ }
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8bc59e" />
    { /* style */ }
    <style>{"@-ms-viewport { width: device-width; }"}</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
