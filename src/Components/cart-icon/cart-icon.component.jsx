import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles"
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleCartIsOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCartIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon
