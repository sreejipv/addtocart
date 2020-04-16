import { createContext } from 'react'

const ItemsCountContext = createContext({
    itemcount: 0,
    setItemcount: () => {}
  })

export default ItemsCountContext