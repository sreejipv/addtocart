import React, { useState,useEffect, useRef } from  'react'
import { ReactComponent as Icon} from '../SVG/star.svg';
import SearchComponent from './search'
import CartComponent from './CartComponent'
import { NavLink } from 'react-router-dom';


const HeaderComponent = props => {
    // console.log(props.cartCount)

    return(
      <div className="header flex">
        <div className="container--fluid flex flex-between"> 
          <div className="flex flex-column flex-center">
           <NavLink to="/"> <Icon width="40" height="40"/></NavLink>
          </div>
          <div className="flex">
            <SearchComponent/>
            <NavLink className="flex" to="/cart">  <CartComponent/> </NavLink>
          </div>
          </div>
      </div>

      
    )
}

export default HeaderComponent