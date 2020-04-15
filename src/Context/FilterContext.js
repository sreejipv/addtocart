import { createContext } from 'react'
const FilterContext = createContext({
    range: {left: '', right:''},
    setRange: () => {}
  })

export default FilterContext