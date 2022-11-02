import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
const CartIcon = () => {
  const { toggleCart, cartItems } = useContext(CartContext)

  const noOfItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{noOfItemsInCart}</span>
    </div>
  )
}
export default CartIcon
