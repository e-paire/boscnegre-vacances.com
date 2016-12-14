import {responsiveStoreEnhancer} from "redux-responsive"
import createStore from "phenomic/lib/redux/createStore"
import rootReducer from "reducers"

const store = createStore(
  rootReducer,
  {...(typeof window !== "undefined") && window.__INITIAL_STATE__},
  [],
  [
    responsiveStoreEnhancer,
  ],
)

export default store
