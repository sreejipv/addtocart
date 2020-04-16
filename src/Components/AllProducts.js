import React, { useState,useEffect, useContext } from  'react'
import ProductsDataContext from '../Context/ProductsContext'
import CartContext from '../Context/CartContext'
import dummydata from '../dummy.json'
import SearchTermContext from '../Context/SearchTerm'
import FilterContext from '../Context/FilterContext'
import SortContext from '../Context/SortContext'
import ItemsCountContext from '../Context/ItemsCount';


const AllProducts = props => {
    const { products, setProducts } = useContext(ProductsDataContext)
    const {addedProducts, setAddedProducts} = useContext(CartContext)
    const [showWarning] = useState(false)
    const [showsuccess, setShowsuccess] = useState(false)
    const [ setError] = useState()
    const {term } = useContext(SearchTermContext)
    const {range} = useContext(FilterContext)
    const {sorttype} = useContext(SortContext)
    const {setItemcount} = useContext(ItemsCountContext)
    
    useEffect(()=>{
        fetch("https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d")
        .then(res => res.json())
        .then(
          (result) => {
            if(result.items){
                setProducts(dummydata.items);
            }else{
                setProducts(dummydata.items);
            }
          },
          (error) => {
            setError(error);
          }
        )
    }, [])
    
    function checkCount() {
        let total = 0;
        for (var i = 0; i < addedProducts.length; i++) {
            total += addedProducts[i].count;
          }
        setItemcount(total)
    }

    function addTocart(item, index) {
        let itemFound = addedProducts.some(product => product.id === index)
        item.id = index
        setShowsuccess(true)
        setTimeout(() => {
            setShowsuccess(false)
        }, 1000);
        if(!itemFound) {
            item.count = 1
            addedProducts.push(item)
        } else {
            item.count = item.count + 1
        }
        setAddedProducts(addedProducts)
        checkCount()
    }
    const baseStyles = {
        show: {
            opacity: 1
    
        },
        hide: {
            opacity: 0
        }
    }

    
    function searchingFor(term) {
        return function(x) {
          return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        };
    }
    function filterFor(range) {
        return function(x) {
            return x.price.actual > range.left && x.price.actual < range.right || !range.left
        };
    }
   
    function sortBy(sorttype) {
        if(sorttype === 'Price -- High Low'){
            return (a, b) => (a.price.actual < b.price.actual) ? 1 : -1
        } else if(sorttype === 'Price -- Low High') {
            return (a, b) => (a.price.actual > b.price.actual) ? 1 : -1
        }else if(sorttype === 'Discount'){
            return (a, b) => (a.discount > b.discount) ? 1 : -1
        }

    }
  
    const warnStyle = showWarning ? baseStyles.show : baseStyles.hide;
    const successStyle = showsuccess ? baseStyles.show : baseStyles.hide;

    return(
        <div className="">
            <div className="container__row">
            {products ? products.sort(sortBy(sorttype)).filter(filterFor(range)).filter(searchingFor(term)).map((item, index) => 
            <div key={index} className="row-element pr-10 pt-10">
                <img className="product-thumb" src={item.image} />
                <p className="product-name tLeft"> {item.name} </p>
                <div className="product-price tLeft"> 
                   <p>
                    <span className="fBold f-16">₹{item.price.actual}</span> 
                    </p> 
                    <p className="flex flex-between">
                    <span className="tStrike  fBold c-grey f-14">₹{item.price.display}</span>
                    <span className="c--green pl-10 c-green fBold f-14">{item.discount}% off</span>
                    </p>
                </div>
                <p className="tCenter">
                <button className="cPointer primary-btn fBold" onClick={() => addTocart(item, index)}>Add to cart </button>
                </p>
                
            </div>
            ) : <p></p>}
            </div>
            <span style={warnStyle} className="bottom-alert warningAlert">Item already added</span>
            <span style={successStyle} className="bottom-alert successAlert">Item added to cart</span>
        </div>
      
    )
}

export default AllProducts