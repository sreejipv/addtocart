import React, { useState, useContext, useRef } from  'react'
import ProductsDataContext from '../Context/ProductsContext'
import FilterContext from '../Context/FilterContext'

const Filter = ({ parentCallback }) => {
// const textInput1 = useRef(null);
// const textInput2 = useRef(null);
const filterValueLeft = useRef(null);
const filterValueStart = useRef(null);
const filterValueEnd = useRef(null);
const [leftvalue , setLeftvalue] = useState(1)
const [rightvalue , setRightvalue] = useState(10)
const [max] = useState(300)
const [min] = useState(1)
const [gapValue, setGapValue] = useState(0)
const { setRange } = useContext(FilterContext)


function handleLeftrange(e){
    let value = parseInt(e.target.value);
    if(value > rightvalue - 10) {
        setLeftvalue(rightvalue - 10)
    }else{
        setLeftvalue(value)        
    }
    const newWidth = `calc(${(100 - leftvalue/3 - (max/3-rightvalue/3))}%)`
    const newMarginLeft = `calc(${(leftvalue/3)}% + (${8 -(leftvalue/3 * 0.15)}px))`

    if(rightvalue-leftvalue === 10) {
      setGapValue(2)
    } else {
      setGapValue(0)
    }
    const newPos = `calc(${(leftvalue/3)-22}% + (${8 -(leftvalue/3 * 0.30)}px))`
    filterValueLeft.current.style.width = newWidth
    filterValueLeft.current.style.marginLeft = newMarginLeft
    filterValueStart.current.style.left = newPos
 
}
function handleRightrange(e){
    let value = parseInt(e.target.value);

    if(value < leftvalue + 1) {
        setRightvalue(leftvalue + 1)
    }else{
        setRightvalue(value)
    }
    const newPos = `calc(${(rightvalue/3)}% + (${8 -(leftvalue/3 * 0.20)}px) )`
    filterValueEnd.current.style.left = newPos

}

function setFilter() {
  setRange({left: leftvalue *1000, right: rightvalue *1000})
}

const styledValueLeft = {
  width: `calc(${100 - (leftvalue/3) - ((max/3)-(rightvalue/3))}%)`,
  marginLeft: '11px'
}
const styledValueStart = {
  position: 'absolute',
  left: '-14%',
}
const styledValueEnd = {
  position: 'absolute',
  left: '29px',
}
    return(
      <div className="filterSlider">
        <p className="tLeft fBold desktop-only">Filters</p>
        <p className="mobile-only tLeft fBold pl-15">Filter Options</p>
        <div className="multi-range pt-10">
                  <input className="filter lower" type="range" min={min}  max={max} value={leftvalue} onChange={ handleLeftrange } />
                  <input className="filter upper" type="range" min={min}  max={max} value={rightvalue} onChange={ handleRightrange} />
                  <div className="rangeSlider">
                    <div ref={filterValueLeft}  style={styledValueLeft} className="rangeSlider--range"></div>
                  </div>
                  <span ref={filterValueStart}  style={styledValueStart} className="startPoint">{leftvalue *1000}</span>
                  <span ref={filterValueEnd} style={styledValueEnd}  className="endPoint">{rightvalue *1000}</span>
          </div>
          <button className="secondary-btn fBold cPointer desktop-only" onClick={setFilter}>
              Apply
          </button>
          <div className="mobile-only modal-bottom">
            <div className="modal-bottom--child fBold cPointer w_50" onClick={()=>parentCallback(false)}>
              <span>Cancel</span>
            </div>

            <div className="modal-bottom--child fBold cPointer w_50 bLeft-grey" onClick={()=> { setRange({left: leftvalue *100, right: rightvalue *100}); parentCallback(false) }}>
              <span>Apply</span>
            </div>
          </div>
      </div>

      
    )
}

export default Filter