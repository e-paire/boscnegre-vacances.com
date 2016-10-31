import {SET_LOCALE} from "../constants/actions"

const initialState = {
  locale: null,
  messages: null,
  formats: null,
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
