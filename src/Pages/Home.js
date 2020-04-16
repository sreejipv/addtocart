import React, { useContext, useState } from "react";

import "../App.scss";
import AllProducts from "../Components/AllProducts";
import OverlayContext from "../Context/OverlayContext";
import Filter from "../Components/Filter";
import HeaderComponent from "../Components/Header";
import Tabs from "../Components/Tabs";
import MobileFilter from "../Components/MobileFilter";
import Footer from '../Components/Footer'
function Home() {

  const {showOverlay} = useContext(OverlayContext)

  return (
    <React.Fragment>
      <HeaderComponent/>
     {showOverlay && <div className="overlay"></div> } 
      <div className="App container--fluid m-center flex">
        <div className="container__left desktop-only">
          <Filter />
        </div>
        <div className="container__right">
          <div className="desktop-only">
            <Tabs />
          </div>
          <div className="mobile-only">
            <MobileFilter />
          </div>
          <AllProducts />
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
