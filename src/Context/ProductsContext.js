import { createContext } from 'react'
const ProductsDataContext = createContext({
    products: [],
    setProducts: () => {}
  })

export default ProductsDataContext