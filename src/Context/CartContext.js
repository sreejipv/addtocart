import { createContext } from 'react'
const CartContext = createContext({
    addedProducts: [],
    setAddedProducts: () => {}
  })

export default CartContext