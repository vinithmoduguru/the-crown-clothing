import { createContext, useEffect, useState } from "react"

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

const decreaseCartItem = (cartItems, productToRemove) => {
  // Find if cartitem already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )
  if (existingCartItem.quantity === 1) {
    return removeCartItem(cartItems, productToRemove)
  }
  // If not, decrement the product from cart
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id && cartItem.quantity > 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decreaseItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const decreaseItemFromCart = (productToRemove) => {
    setCartItems(decreaseCartItem(cartItems, productToRemove))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        addItemToCart,
        decreaseItemFromCart,
        removeItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
      }}>
      {children}
    </CartContext.Provider>
  )
}
