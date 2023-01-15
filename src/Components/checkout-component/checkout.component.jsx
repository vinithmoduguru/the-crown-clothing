import { useDispatch, useSelector } from "react-redux"
import {
  addItemToCart,
  decreaseItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js"
import { selectCartItems } from "../../store/cart/cart.selector.js"
import "./checkout.styles.jsx"
import {
  Arrow,
  BaseSpan,
  ImageContainer,
  Value,
  CheckoutItemContainer,
  Remove,
  Quantity,
} from "./checkout.styles.jsx"

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const decreaseItemHandler = () =>
    dispatch(decreaseItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <Remove onClick={removeItemHandler}>&#10005;</Remove>
    </CheckoutItemContainer>
  )
}
export default CheckOutItem
