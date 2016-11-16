import {combineReducers} from "redux"
import {createResponsiveStateReducer} from "redux-responsive"
import * as phenomicReducers from "phenomic/lib/redux/modules"
import intl from "./intl"

export default combineReducers({
  ...phenomicReducers,
  ...{
    browser: createResponsiveStateReducer({
      s: 670,
      m: 1024,
      l: 1360,
    }, "xl"),
    intl
  },
})
