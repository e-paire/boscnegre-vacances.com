// Hot loading HRM Patch
import "react-hot-loader/patch"

// Polyfills
import "babel-polyfill"
import "intl"
import "intl/locale-data/jsonp/fr"
import "intl/locale-data/jsonp/nl"
import Modernizr from "modernizr"
import "whatwg-fetch"

// Phenomic
import phenomicClient from "phenomic/lib/client"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"
import imageStyles from "../src/components/Image/index.css"

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

// Object-fit polyfill
if (!Modernizr.objectfit) {
  const images = document.querySelectorAll(`.${imageStyles.wrapper}`)

  for (let i = 0; i < images.length; i++) {
    const wrapper = images[i]
    const image = wrapper.querySelector(`.${imageStyles.image}`)
    const url = image.getAttribute("src")

    if (url) {
      wrapper.style.backgroundImage = `url(${url})`
      wrapper.className += ` ${imageStyles.wrapper_noObjectFit}`
    }
  }
}

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
