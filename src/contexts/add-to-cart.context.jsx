import { createContext, useContext } from "react"

export const AddToCartContext = createContext({
  products: [],
})

export const AddToCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useContext([
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
    },
  ])
  const value = { cartProducts }

  return (
    <AddToCartContext.Provider value={value}>
      {children}
    </AddToCartContext.Provider>
  )
}
