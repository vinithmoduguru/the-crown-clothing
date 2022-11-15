import { useParams } from "react-router"
import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "../../Components/product-card/product-card.component"
import { CategoryContainer, CategoryTitle } from "./category.styles"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
