import { createContext } from 'react'
const SearchTermContext = createContext({
    term: "",
    setTerm: () => {}
  })

export default SearchTermContext