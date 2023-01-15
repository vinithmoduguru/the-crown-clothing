import "./cart-dropdown.styles.jsx"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx"
import { selectCartItems } from "../../store/cart/cart.selector.js"

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const goToCheckOutHandler = () => {
    navigate("/checkout")
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}
export default CartDropDown
