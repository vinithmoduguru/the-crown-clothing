import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"
import { useContext } from "react"
import { ToggleCartContext } from "../../contexts/toggle-cart.context"
const CartIcon = () => {
  const { toggleFunction } = useContext(ToggleCartContext)
  return (
    <div className="cart-icon-container" onClick={toggleFunction}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
export default CartIcon
