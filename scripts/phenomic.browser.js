// Hot loading HRM Patch
import "react-hot-loader/patch"

// fetch polyfill
import "whatwg-fetch"

import storage from "store"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"
import phenomicClient from "phenomic/lib/client"

import {setLocale} from "actions/intl"

let locale = storage.get("locale")

if (locale !== null) {
  store.dispatch(setLocale(locale))
} else {
  store.dispatch(setLocale("fr"))
}

phenomicClient({metadata, routes, store})

// md files processed via phenomic-loader to JSON & generate collection
let mdIndex = require.context("../", false, /\.(md|markdown)$/)

let mdFrPages = require.context("../_fr", true, /\.(md|markdown)$/)
let mdFrPosts = require.context("../_nouvelles", true, /\.(md|markdown)$/)
let mdFrCottages = require.context("../_gites", true, /\.(md|markdown)$/)
let mdFrServices = require.context("../_services", true, /\.(md|markdown)$/)

let mdNlPages = require.context("../_nl", true, /\.(md|markdown)$/)
let mdNlPosts = require.context("../_nieuws", true, /\.(md|markdown)$/)
let mdNlCottages = require.context("../_huisjes", true, /\.(md|markdown)$/)
let mdNlServices = require.context("../_diensten", true, /\.(md|markdown)$/)

const mds = [mdIndex,
  mdFrPages, mdFrPosts, mdFrCottages, mdFrServices,
  mdNlPages, mdNlPosts, mdNlCottages, mdNlServices,
]

mds.map(md => {
  md.keys().forEach(md)
})

// hot loading
if (module.hot) {

  // hot load md
  mds.map(md => {
    module.hot.accept(md.id, () => {
      const mdHotUpdater = require("phenomic/lib/client/hot-md").default
      const requireUpdate = mdHotUpdater(md, window.__COLLECTION__, store)
      md.keys().forEach(requireUpdate)
    })
  })

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
