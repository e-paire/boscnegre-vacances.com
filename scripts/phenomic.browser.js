// Hot loading HRM Patch
import "react-hot-loader/patch"

// Intl polyfill
import "intl"
import "intl/locale-data/jsonp/fr"
import "intl/locale-data/jsonp/nl"

// phenomic
import "babel-polyfill"
import "whatwg-fetch"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"
import phenomicClient from "phenomic/lib/client"

phenomicClient({metadata, routes, store})

// md files processed via phenomic-loader to JSON & generate collection
require.context("../_fr_pages", true, /\.(md|markdown)$/)
require.context("../_fr_posts", true, /\.(md|markdown)$/)
require.context("../_fr_cottages_categories", true, /\.(md|markdown)$/)
require.context("../_fr_services", true, /\.(md|markdown)$/)
require.context("../_fr_groups", true, /\.(md|markdown)$/)

require.context("../_nl_pages", true, /\.(md|markdown)$/)
require.context("../_nl_posts", true, /\.(md|markdown)$/)
require.context("../_nl_cottages_categories", true, /\.(md|markdown)$/)
require.context("../_nl_services", true, /\.(md|markdown)$/)

// hot loading
if (module.hot) {

  // Enable Webpack hot module replacement for reducers
  module.hot.accept("../src/reducers", () => {
    const nextRootReducer = require("../src/reducers")

    store.replaceReducer(nextRootReducer)
  })

  // hot load app
  module.hot.accept(
    ["../src/metadata.js", "../src/routes.js", "../src/store.js"],
    () => phenomicClient({
      metadata: require("../src/metadata.js").default,
      routes: require("../src/routes.js").default,
      store: require("../src/store.js").default,
    })
  )
}
