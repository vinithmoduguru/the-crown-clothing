import Home from "./Routes/Home/home.component"
import { Routes, Route } from "react-router-dom"
import Navigation from "./Routes/navigation/navigation.component"
import Authentication from "./Routes/authentication/authentication.component"
import Shop from "./Routes/shop/shop-component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}
export default App
