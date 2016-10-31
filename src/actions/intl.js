import {addLocaleData} from "react-intl"
import flatten from "flat"
import storage from "store"

import __intlFR from "react-intl/locale-data/fr"
import __intlNL from "react-intl/locale-data/nl"

import localeFR from "translations/fr.yml"
import localeNL from "translations/nl.yml"

import {SET_LOCALE} from "constants/actions"

addLocaleData(__intlFR)
addLocaleData(__intlNL)

function compileLocale(locale, {messages, formats = {}}) {
  return {locale, messages: flatten(messages), formats}
}

const LOCALES = {
  "fr": compileLocale("fr", localeFR),
  "nl": compileLocale("nl", localeNL),
}

export function setLocale(locale) {
  storage.set("locale", locale)
  return {type: SET_LOCALE, ...LOCALES[locale]}
}
