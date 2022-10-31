import { createContext, useState } from "react"

export const ToggleCartContext = createContext(false)

export const ToggleCartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }
  return (
    <ToggleCartContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ToggleCartContext.Provider>
  )
}
