import {createResponsiveStateReducer} from "redux-responsive"

export default {
  browser: createResponsiveStateReducer({
    s: 670,
    m: 1024,
    l: 1360,
  }, "xl"),
}
