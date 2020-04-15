import React, { useState,useEffect, useContext } from  'react'
import ProductsDataContext from '../Context/ProductsContext'
import CartContext from '../Context/CartContext'
import dummydata from '../dummy.json'
import SearchTermContext from '../Context/SearchTerm'
import FilterContext from '../Context/FilterContext'
import SortContext from '../Context/SortContext'

const AllProducts = props => {
    const { products, setProducts } = useContext(ProductsDataContext)
    const {addedProducts, setAddedProducts} = useContext(CartContext)
    const [showWarning, setShowWarning] = useState(false)
    const [showsuccess, setShowsuccess] = useState(false)
    const [error, setError] = useState()
    const {term } = useContext(SearchTermContext)
    const {range} = useContext(FilterContext)
    const {sorttype} = useContext(SortContext)
    
    useEffect(()=>{
        fetch("https://api.jsonbin.io/b/5e8c3aafaf7c476bc47e47a3")
        .then(res => res.json())
        .then(
          (result) => {
            if(result.items){
            setProducts(result.items);
            }else{
                setProducts(dummydata.items);
            }
          },
          (error) => {
            setError(error);
          }
        )
    }, [])
    
    function addTocart(item, index) {
        let itemFound = addedProducts.some(product => product.id === index)
        if(!itemFound) {
            item.id = index
            item.count = 1
            addedProducts.push(item)
            setAddedProducts(addedProducts)
            setShowsuccess(true)
            setShowWarning(false)
            setTimeout(() => {
                setShowsuccess(false)
            }, 1000);
            props.addItem(addedProducts.length)
        } else {
            setShowWarning(true)
            setShowsuccess(false)

            setTimeout(() => {
                setShowWarning(false)
            }, 1000);
        }
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
                <img className="product-thumb" src={require(`../images/item1.png`)} />
                <p className="product-name tLeft"> {item.name} </p>
                <p className="product-price tLeft"> 
                    <span className="fBold f-16">₹{item.price.actual}</span>
                    <span className="tStrike pl-5 fBold c-grey f-14">{item.price.display}</span>
                    <span className="c--green pl-10 c-green fBold f-16">{item.discount}% off</span>
                </p>
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