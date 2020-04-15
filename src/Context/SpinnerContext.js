import { createContext } from 'react'

const SpinnerContext = createContext({
    globalSpinner: false,
    setGlobalSpinner: () => {}
  })

export default SpinnerContext