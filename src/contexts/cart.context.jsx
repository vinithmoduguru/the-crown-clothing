import { createContext, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartitem already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  // If not, append new product to cart
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCart, addItemToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
