import React, { useState,useEffect, useRef } from  'react'


const FilterProducts = props => {
const textInput1 = useRef(null);
const textInput2 = useRef(null);
const filterValueLeft = useRef(null);
const filterValueRight = useRef(null);
const [leftvalue , setLeftvalue] = useState(0)
const [rightvalue , setRightvalue] = useState(10)
const [max] = useState(100)
const [min] = useState(0)
const activeLeft = '#ccc'
const inactiveLeft = 'transparent'
const activeRight = '#5378EB'
const inactiveRight = '#ccc'

function handleLeftrange(e){
    let value = parseInt(e.target.value);
    const progressLeft = (value / max) * 100 + '%'
    const newBackgroundStyle = `linear-gradient(90deg, ${activeLeft} 0% ${progressLeft}%,   ${inactiveLeft} ${progressLeft}% 100%)`
    textInput1.current.style.background = newBackgroundStyle

    // const newPos = `calc(${value}% + (${8 - value * 0.15}px))`
    if(value > rightvalue - 10) {
        setLeftvalue(rightvalue - 10)
    }else{
        setLeftvalue(value)        
    }
    const newPos = `calc(${leftvalue}% + (${8 - leftvalue * 0.28}px))`
    filterValueLeft.current.style.left = newPos

}
function handleRightrange(e){
    let value = parseInt(e.target.value);
    const progressRight = (value / max) * 100 + '%'
    const newBackgroundStyle = `linear-gradient(90deg, ${activeRight} 0% ${progressRight}%,   ${inactiveRight} ${progressRight}% 100%)`
    textInput2.current.style.background = newBackgroundStyle
 
    if(value < leftvalue + 10) {
        setRightvalue(leftvalue + 10)
    }else{
        setRightvalue(value)
    }
    const newPos = `calc(${rightvalue}% + (${8 - rightvalue * 0.28}px))`
    filterValueRight.current.style.left = newPos
}
const progressLeft = (leftvalue / max) * 100 + '%'
const progressRight = (rightvalue / max) * 100 + '%'

const styleInputLeft = {
    background: `linear-gradient(90deg, ${activeLeft} 0% ${progressLeft},   ${inactiveLeft} ${progressLeft} 100%)`,
 }
const styleInputRight = {
    background: `linear-gradient(90deg, ${activeRight} 0% ${progressRight},   ${inactiveRight} ${progressRight} 100%)`,
}

const styledValueLeft = {
    position: `absolute`,
    left: '0px', 
    bottom: '10px'
}
const styledValueRight = {
    position: `absolute`,
    left: '10px', 
    bottom: '10px'
}

    return(
        <div className="multi-range container__left pt-10">
        <form>
            <label>
            
            <input ref={textInput1} style={styleInputLeft} className="filter lower" type="range" min={min} max={max} value={leftvalue} onChange={ handleLeftrange } />

            </label>
            <span ref={filterValueLeft} className="filterValue" style={styledValueLeft}>{leftvalue * 100}</span>
            <span ref={filterValueRight} className="filterValue" style={styledValueRight}>{rightvalue * 100}</span>

            {/* <input style={styleInputLeft} className="filter lower lower_copy" type="range" min={min} max={max} value={leftvalue}  /> */}

            <input ref={textInput2}  style={styleInputRight} className="filter upper" type="range" min={min} max={max} value={rightvalue} onChange={ handleRightrange} />

        </form>
                   </div>
      
    )
}

export default FilterProducts