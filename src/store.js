import createLogger from "redux-logger"
import {responsiveStoreEnhancer} from "redux-responsive"
import thunk from "redux-thunk"

import createStore from "phenomic/lib/redux/createStore"

import rootReducer from "reducers"

const store = createStore(
  rootReducer,
  {...(typeof window !== "undefined") && window.__INITIAL_STATE__},
  [
    thunk,
    createLogger({collapsed: true}),
  ],
  [
    responsiveStoreEnhancer,
  ],
)

export default store
