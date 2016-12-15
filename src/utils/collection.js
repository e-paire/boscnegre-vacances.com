import {getLocale} from "utils/intl"

export function customFilter(page, locale, layout) {
  const isVisible = typeof (page.is_visible) === "undefined" || page.is_visible === true
  const isLocalized = getLocale(page.__url) === locale
  const hasLayout = Array.isArray(layout)
    ? layout.indexOf(page.layout) > -1
    : page.layout === layout

  return hasLayout && isLocalized && isVisible
}
