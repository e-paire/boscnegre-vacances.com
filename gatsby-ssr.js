import "./src/styles/index.css"

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
    // <script
    //   dangerouslySetInnerHTML={{
    //     __html: `
    //     window.ctoutvert = {
    //       id: 14230,
    //       lang: 'auto',
    //       url: 'https://bookingpremium.secureholiday.net/widgets/'
    //     };

    //     (function (w, d, s, ctv, r, js, fjs) {
    //       console.log(w[ctv].lang);
    //       r = new XMLHttpRequest();
    //       r.open("GET", w[ctv].url + "js/src.json");
    //       r.responseType = "json";
    //       r.json = true;
    //       r.send();
    //       r.onload = function () {
    //           w[ctv].src = r.responseType == "json" ? r.response : JSON.parse(r.response);
    //           js.src = w[ctv].src[0];
    //           fjs.parentNode.insertBefore(js, fjs);
    //       };
    //       (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    //       js.id = "ctvwidget";
    //       js.async = 1;
    //       console.log(js)
    //   })(window, document, "script", "ctoutvert");

    //   `,
    //   }}
    // />,
  ])
}
