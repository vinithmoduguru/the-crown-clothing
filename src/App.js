import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Home from "./Routes/Home/home.component"
import { Routes, Route } from "react-router-dom"
import Navigation from "./Routes/navigation/navigation.component"
import Authentication from "./Routes/authentication/authentication.component"
import Shop from "./Routes/shop/shop-component"
import CheckOut from "./Routes/checkout/checkout-component"
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils"
import { setCurrentUser } from "./store/user/user.action"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}
export default App
