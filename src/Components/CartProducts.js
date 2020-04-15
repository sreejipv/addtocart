import React, { useState,useContext, useEffect } from  'react'
import CartContext from '../Context/CartContext'
import { ReactComponent as IconMinus} from '../SVG/minus.svg';
import { ReactComponent as IconPlus} from '../SVG/plus.svg';


const CartProducts = props => {
  const {addedProducts, setAddedProducts} = useContext(CartContext)
  const [actualSum,setActualSum] = useState(0)
  const [displaySum,setDisplaySum] = useState(0)

  useEffect(()=>{
      if(addedProducts.length > 0) {
        addDisplayPrice()
        addActualPrice()
      }
    }, [])

   function addDisplayPrice(){
    let total = 0;
    for (var i = 0; i < addedProducts.length; i++) {
        total += addedProducts[i].price.display * parseInt(addedProducts[i].count);
      }
      setDisplaySum(total);
   } 
   function addActualPrice(){
    let total = 0;
    for (var i = 0; i < addedProducts.length; i++) {
        total += addedProducts[i].price.actual * parseInt(addedProducts[i].count);
      }
      setActualSum(total);
   } 

    function itemCountPlus(item) {
        item.count = item.count+1
        setAddedProducts(addedProducts)
        addDisplayPrice()
        addActualPrice()
    }
    function itemCountMinus(item) {
        item.count = item.count-1
        setAddedProducts(addedProducts)
        addDisplayPrice()
        addActualPrice()
        if(item.count === 0) {
            removeItem(item)
        }
   
    }

    function removeItem(item) {

        let newProducts = addedProducts.filter(function(s) { return s != item })
        setAddedProducts(newProducts)
    }


    return(
    <React.Fragment>
        <div className="cart-products-container flex ">
      <div className="cart-products">
        {addedProducts.length >0 ? addedProducts.map((item, index) => 
            <div key={index} className="row-element pr-10 pt-10 pb-10 pl-10">
                <div>
                    <img className="product-thumb" src={require(`../images/item1.png`)} />
                </div>
                <div className="cart-products--product-info w_75 flex flex-between">
                <div className="flex flex-column pl-10">
                <p className="tLeft">{item.name}</p>    
                <p className="product-price tLeft pt-20"> 
                    <span className="fBold f-16">₹{item.price.actual}</span>
                    <span className="tStrike pl-5 fBold c-grey f-14">{item.price.display}</span>
                    <span className="c--green pl-10 c-green fBold f-16">{item.discount}% off</span>
                </p>
                </div>
               
                <div className="flex flex-center itemCount">
                    <div className="flex flex-center flex-column">
                        <IconPlus width="35" height="35" onClick={()=>itemCountPlus(item)}/>
                    </div>
                    <div className="flex flex-center flex-column pl-10 pr-10">
                        <input  className="" type="number"  value={item.count} readOnly /> 
                    </div>
                    <div className="flex flex-center flex-column">
                        <IconMinus width="35" height="35" onClick={()=>itemCountMinus(item)} />
                    </div>               
                </div>
                <span className="fBold flex flex-center flex-column removeBtn" onClick={()=>removeItem(item)}>REMOVE</span>
                </div>                
            </div>
            ) : <div className="cart-products">
                <p>Your cart is empty</p>
            </div>} 
      </div>
      {addedProducts.length >0 &&
      <div className="cart-products--summary">
            <p className="m-0 fBold c-greyDark cart-products--summary--header">PRICE DETAILS</p>
            <p className="m-0 cart-products--summary--content flex flex-between">
                <span className="pr-10">Price ({addedProducts.length} items) :</span>
                <span className="pl-15">₹{displaySum}</span>
            </p>
            <p className="m-0 cart-products--summary--content flex flex-between">
                <span className="pr-10">Discount :</span>
                <span className="pl-15">₹{displaySum - actualSum}</span>
            </p>
            <p className="m-0 fBold  cart-products--summary--header flex flex-between">
                <span>Total Payable</span>
                <span>{actualSum}</span>
            </p>

      </div>}
      </div>
      </React.Fragment>
      
    )
}

export default CartProducts