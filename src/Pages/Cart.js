import React, { useContext, useState } from  'react'
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../App.scss';

import HeaderComponent from '../Components/Header'

import CartProducts from '../Components/CartProducts'

function Cart() {
  

  return (  
  <React.Fragment>
            <HeaderComponent/>
            <div className="App container--fluid m-center flex">
             <CartProducts/>
             </div>
            </React.Fragment>

  );
}

export default Cart;
