import { compose } from "redux"
import { configureStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
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

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [customLogger]
// const composedEnhancers = compose(...middleWares)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
  //   enhancers: composedEnhancers,
})

export const persistor = persistStore(store)
