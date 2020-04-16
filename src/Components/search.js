import React, { useState,useContext } from  'react'
import { ReactComponent as Icon} from '../SVG/search.svg';
import SearchTermContext from '../Context/SearchTerm'

const SearchComponent = props => {
  const [isOpen, setIsOpen] = useState(true)
  const { setTerm } = useContext(SearchTermContext)

  const baseStyles = {
    open: {
        width: 234,
        transition: 'all 0.5s',

    },
    closed: {
        width: 0,
        transition: 'all 0.5s',
        borderWidth: 0

    }
};
function handleClick()  {
  setIsOpen(!isOpen)
}
function serachProduct(e) {
  setTerm(e.target.value)
}
const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
    return(
      <div className="flex ">
          <input style={textStyle} className="searchBar f-16 mb-10 " type="text" onChange={serachProduct} name="search" placeholder="Search " /> 
         <div className="flex flex-center flex-column">
            <Icon width="30" height="30" className="cPointer" onClick={handleClick}/>
         </div>
      </div>
    )
}

export default SearchComponent