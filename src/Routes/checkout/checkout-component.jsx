import { useContext } from "react"
import CheckOutItem from "../../Components/checkout-component/checkout.component"
import { CartContext } from "../../contexts/cart.context"
import "./checkout-styles.scss"
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <h2 className="Total">TOTAL: ₹{cartTotal}</h2>
    </div>
  )
}
export default CheckOut
