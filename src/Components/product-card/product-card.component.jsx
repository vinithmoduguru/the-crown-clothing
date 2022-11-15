import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles"

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product

  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
