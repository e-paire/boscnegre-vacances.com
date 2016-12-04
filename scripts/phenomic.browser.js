// Hot loading HRM Patch
import "react-hot-loader/patch"

// fetch polyfill
import "whatwg-fetch"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"
import phenomicClient from "phenomic/lib/client"

phenomicClient({metadata, routes, store})

// md files processed via phenomic-loader to JSON & generate collection
require.context("../_fr", true, /\.(md|markdown)$/)
require.context("../_articles", true, /\.(md|markdown)$/)
require.context("../_categories_gites", true, /\.(md|markdown)$/)
require.context("../_gites", true, /\.(md|markdown)$/)
require.context("../_services", true, /\.(md|markdown)$/)
require.context("../_groupes", true, /\.(md|markdown)$/)

require.context("../_nl", true, /\.(md|markdown)$/)
require.context("../_nieuws", true, /\.(md|markdown)$/)
require.context("../_categorieen_huisjes", true, /\.(md|markdown)$/)
require.context("../_huisjes", true, /\.(md|markdown)$/)
require.context("../_diensten", true, /\.(md|markdown)$/)

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
    // webpack 1
    () => phenomicClient({
      metadata: require("../src/metadata.js").default,
      routes: require("../src/routes.js").default,
      store: require("../src/store.js").default,
    })
    // webpack 2
    /*
    () => phenomicClient({ metadata, routes, store })
    */
  )
}
