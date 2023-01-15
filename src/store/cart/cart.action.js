import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

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

export const setIsCartOpen = (toggle) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, toggle)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const decreaseItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = decreaseCartItem(cartItems, productToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
