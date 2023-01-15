import { compose } from "redux"
import { configureStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log("type: ", action.type)
  console.log("payload: ", action.payload)
  console.log("currentState: ", store.getState())

  next(action)

  console.log("nextState: ", store.getState())
}

const middleWares = [customLogger]
// const composedEnhancers = compose(...middleWares)
export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
  //   enhancers: composedEnhancers,
})
