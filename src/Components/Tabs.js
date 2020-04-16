import React, { useState, useContext, useEffect,useRef } from  'react'
import Tab from './Tab'
import SortContext from '../Context/SortContext'

const Tabs = ({ parentCallback }) => {
  const [activeTab, setActiveTab] = useState('')
  const { setSorttype} = useContext(SortContext)
  const [sortApply, setSortApply] = useState(true)
  const [showModal, setShowModal] = useState(true)
  const width = window.innerWidth
  const breakpoint = 620

  useEffect(()=>{
    setSorttype('Price -- High Low')
    setActiveTab('Price -- High Low')

    if(width < breakpoint) {
        setSortApply(false)
    }
    }, [])

  function onClickTabItem(tab) {
    setActiveTab(tab)
    if(sortApply) {
        setSorttype(tab)
    }
  }

  function applyTosort() {
    setSorttype(activeTab)
    setShowModal(false)
    parentCallback(false);
  }


    return(
        
        <div className="sort-products flex flex-left">
            <li>
                <span className="fBold sort--header desktop-only">Sort by</span>
                <span className="fBold sort--header mobile-only">Sort Options</span>
            </li> 
            <Tab  
                activeTab={activeTab}
                label="Price -- High Low"
                onClick={onClickTabItem}
            />

            <Tab
                activeTab={activeTab}
                label="Price -- Low High"
                onClick={onClickTabItem}
            />
            <Tab
                activeTab={activeTab}

                label="Discount"
                onClick={onClickTabItem}
            />
             <div className="mobile-only modal-bottom">
            <div className="modal-bottom--child fBold cPointer w_50" onClick={()=>parentCallback(false)}>
              <span>Cancel</span>
            </div>

            <div className="modal-bottom--child fBold cPointer w_50 bLeft-grey" onClick={applyTosort}>
              <span>Apply</span>
            </div>
          </div>
        </div>
       
      

    )
}

export default Tabs