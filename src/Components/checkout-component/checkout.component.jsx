import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
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
  const { removeItemFromCart, addItemToCart, decreaseItemFromCart } =
    useContext(CartContext)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const decreaseItemHandler = () => decreaseItemFromCart(cartItem)

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
