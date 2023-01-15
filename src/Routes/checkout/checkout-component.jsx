import { useSelector } from "react-redux"
import CheckOutItem from "../../Components/checkout-component/checkout.component"
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector"
import "./checkout-styles.jsx"
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout-styles.jsx"
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock as="span">Product</HeaderBlock>
        <HeaderBlock as="span">Description</HeaderBlock>
        <HeaderBlock as="span">Quantity</HeaderBlock>
        <HeaderBlock as="span">Price</HeaderBlock>
        <HeaderBlock as="span">Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <Total as="h2">TOTAL: ₹{cartTotal}</Total>
    </CheckoutContainer>
  )
}
export default CheckOut
