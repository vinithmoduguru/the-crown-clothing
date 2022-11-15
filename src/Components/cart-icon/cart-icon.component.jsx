import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles"
const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon
