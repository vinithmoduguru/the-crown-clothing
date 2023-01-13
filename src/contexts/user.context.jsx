import { createContext, useReducer } from "react"
import { createAction } from "../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "../store/user/user.types"
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const value = { currentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
