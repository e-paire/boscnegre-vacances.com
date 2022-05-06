const urls = {
  fr: {
    ancv: "http://www.ancv.com/",
    camping2be:
      "https://www.camping2be.com/france/lacapelle-biron/avis-clients-village-de-vacances-bosc-negre",
    cloudinary_fetch: "https://res.cloudinary.com/dlpszeeyh/image/fetch",
    facebook: "https://www.facebook.com/BoscNegre",
    secureholiday: "https://bookingpremium.secureholiday.net/fr/14230",
    tripadvisor:
      "https://www.tripadvisor.fr/Hotel_Review-g1856959-d2058207-Reviews-Village_de_vacances_Bosc_Negre-Lacapelle_Biron_Lot_et_Garonne_Nouvelle_Aquitaine.html",
    villagedegites: "http://www.villagesdegites.fr/",
    youtube: "https://www.youtube.com/channel/UCnlRv-Wb9sXyFP9LEUQ4LpQ",
    zoover:
      "http://www.zoover.fr/france/aquitaine/lacapelle-biron/hameau-de-bosc-negre/village-vacances",
  },
  nl: {
    camping2be:
      "https://nl.camping2be.com/france/lacapelle-biron/klantenbeoordelingen-village-de-vacances-bosc-negre",
    secureholiday: "https://bookingpremium.secureholiday.net/nl/14230",
    tripadvisor:
      "https://www.tripadvisor.nl/Hotel_Review-g1856959-d2058207-Reviews-Village_de_vacances_Bosc_Negre-Lacapelle_Biron_Lot_et_Garonne_Nouvelle_Aquitaine.html",
    zoover:
      "http://www.zoover.nl/frankrijk/aquitaine/lacapelle-biron/hameau-de-bosc-negre/vakantiepark",
  },
}

export const getUrl = (key, locale) => {
  const defaultLocale = "fr"

  if (Object.keys(urls).indexOf(locale) > -1 && urls[locale][key]) {
    return urls[locale][key]
  }

  return urls[defaultLocale][key]
}
