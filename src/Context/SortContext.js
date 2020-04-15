import { createContext } from 'react'

const SortContext = createContext({
    sorttype: 'Price -- High Low',
    setSorttype: () => {}
  })

export default SortContext