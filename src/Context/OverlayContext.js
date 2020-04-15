import { createContext } from 'react'
const OverlayContext = createContext({
    showOverlay: false,
    setShowOverlay: () => {}
  })

export default OverlayContext