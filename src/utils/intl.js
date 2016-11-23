import {addLocaleData} from "react-intl"
import __intlFR from "react-intl/locale-data/fr"
import __intlNL from "react-intl/locale-data/nl"
import flatten from "flat"

import localeFR from "translations/fr.yml"
import localeNL from "translations/nl.yml"

addLocaleData(__intlFR)
addLocaleData(__intlNL)

const messages = {
  fr: flatten(localeFR),
  nl: flatten(localeNL),
}

const defaultLocale = "fr"

export const locales = ["fr", "nl"]

export function getLocale(url) {
  const firstURIlevel = url.replace(/^\//, "").split("/")[0]
  return firstURIlevel && locales.indexOf(firstURIlevel) > -1
    ? firstURIlevel
    : defaultLocale
}

export function getIntl(locale) {
  return {
    locale: locale,
    messages: messages[locale],
    defaultLocale: defaultLocale,
  }
}
