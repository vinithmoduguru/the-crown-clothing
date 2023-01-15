import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import { useSelector } from "react-redux"

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg"

import CartIcon from "../../Components/cart-icon/cart-icon.component"
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component"
import { selectIsCartOpen } from "../../store/cart/cart.selector"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { selectCurrentUser } from "../../store/user/user.selector"
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles"
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
