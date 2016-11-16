import {SET_LOCALE} from "../constants/actions"

const initialState = {
  locale: "fr",
  messages: {
    "nav.groups": "Les groupes",
    "nav.cottages": "Les gîtes",
  },
  formats: null,
  defaultLocale: "fr",
}

export default function intlReducer(state = initialState, action) {
  if (action.type === SET_LOCALE) {
    return {
      locale: action.locale,
      messages: action.messages,
      formats: action.formats,
    }
  }

  return state
}
