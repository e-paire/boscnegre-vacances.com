import {combineReducers} from "redux"

import * as phenomicReducers from "phenomic/lib/redux/modules"
import intl from "./intl"

export default combineReducers({
  ...phenomicReducers,
  ...{
    intl
  },
})
