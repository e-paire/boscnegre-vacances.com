import {IntlProvider} from "react-intl"
import React from "react"
import messagesNl from "./src/translations/nl.json"
import messagesFr from "./src/translations/fr.json"

import "./src/styles/index.css"

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
