import React, {useContext } from  'react'
import { ReactComponent as Icon} from '../SVG/cart.svg';
import { useLocation } from 'react-router-dom'
import CartContext from '../Context/CartContext'

const CartComponent = props => {
  let location = useLocation();
  const {addedProducts} = useContext(CartContext)
  
  if(location.pathname === '/cart') {
      return null;
  }

    return(
      <div className="cartIcon cPointer pl-10  flex flex-center flex-column">
             <Icon width="30" height="30"/>  
            {addedProducts.length > 0 && <span className="cartCount"> {addedProducts.length}</span> } 
      </div>

      
    )
}

export default CartComponent