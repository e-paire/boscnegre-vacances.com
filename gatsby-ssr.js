import "./src/styles/index.css"

import {withPrefix} from "gatsby"
import {DisplayNames} from "intl"
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

export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    <div style={{display: "none"}}>
      {/* <ctv-product-list></ctv-product-list> */}
      <ctv-product data-product-id="105540"></ctv-product>
      <ctv-inventory data-product-id="105540"></ctv-inventory>
      <ctv-availability data-product-id="105540"></ctv-availability>
    </div>,
    <script src={withPrefix("ctv.js")} />,
  ])
}
