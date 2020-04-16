import React, { useState } from "react";

import "./App.scss";
import ProductsDataContext from "./Context/ProductsContext";
import SortContext from "../src/Context/SortContext.js";
import CartContext from "../src/Context/CartContext.js";
import SearchTermContext from "../src/Context/SearchTerm";
import FilterContext from "../src/Context/FilterContext";
import OverlayContext from '../src/Context/OverlayContext';
import ItemsCountContext from '../src/Context/ItemsCount';
import AppRouter from "./AppRouter";

function App() {
  const [products, setProducts] = useState([]);
  const [sorttype, setSorttype] = useState("");
  const [showOverlay, setShowOverlay] = useState();
  const [term, setTerm] = useState("");
  const [range, setRange] = useState({});
  const [addedProducts, setAddedProducts] = useState([])
  const [itemcount, setItemcount] = useState([])
  const cartValue = {addedProducts, setAddedProducts}
  const overlayValue = {showOverlay, setShowOverlay}
  const rangeValue = { range, setRange };
  const termValue = { term, setTerm };
  const sortValue = { sorttype, setSorttype };
  const value = { products, setProducts };
  const countValue = {itemcount, setItemcount}


  return (
    <ProductsDataContext.Provider value={value}>
        <SortContext.Provider value={sortValue}>
          <SearchTermContext.Provider value={termValue}>
            <FilterContext.Provider value={rangeValue}>
              <CartContext.Provider value={cartValue}>
                <OverlayContext.Provider value={overlayValue}>
                  <ItemsCountContext.Provider value={countValue}>
                  {AppRouter}
                  </ItemsCountContext.Provider>
                </OverlayContext.Provider>
              </CartContext.Provider>
            </FilterContext.Provider>
          </SearchTermContext.Provider>
        </SortContext.Provider>
    </ProductsDataContext.Provider>
  );
}

export default App;
