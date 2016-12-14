import {combineReducers} from "redux"
import * as phenomicReducers from "phenomic/lib/redux/modules"
import responsiveReducers from "./responsive"

export default combineReducers({
  ...phenomicReducers,
  ...responsiveReducers,
})
