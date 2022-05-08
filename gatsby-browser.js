import "./src/styles/index.css"

import React from "react"
import {IntlProvider} from "react-intl"

import messagesFr from "./src/translations/fr.json"
import messagesNl from "./src/translations/nl.json"

const messages = {
  fr: messagesFr,
  nl: messagesNl,
}

export const wrapPageElement = ({element, props}) => {
  const locale = props.path.startsWith("/nl") ? "nl" : "fr"
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {element}
    </IntlProvider>
  )
}

let count = 0

export const onRouteUpdate = ({location}) => {
  const locale = location.pathname.startsWith("/nl") ? "nl" : "fr"

  window.ctoutvert = {
    id: 14230,
    lang: locale,
    url: "https://bookingpremium.secureholiday.net/widgets/",
  }

  const head = document.getElementsByTagName("head")[0]
  // const scriptCtv = document.getElementById("ctvwidget")
  const scriptCtv = document.querySelector('script[data-type="ctv"]')

  if (scriptCtv) {
    head.removeChild(scriptCtv)

    scriptCtv.id = count++
    scriptCtv.async = 0

    head.appendChild(scriptCtv)
  }
}
