import React, { useState,useEffect, useRef, useContext } from  'react'
import { ReactComponent as FilterIcon} from '../SVG/filter.svg';
import { ReactComponent as SortIcon} from '../SVG/sort.svg';
import OverlayContext from '../Context/OverlayContext'
import Filter from './Filter'
import Tabs from './Tabs'

const MobileFilter = props => {
    const [showFilter, setShowFilter] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const { setShowOverlay } = useContext(OverlayContext)

    const childCall = (props) =>{
      setShowSort(props)
      setShowFilter(props)
      setShowOverlay(false)
    }
    return(
    <div className="mobil-filter container--fluid flex flex-between"> 
          <div className="flex flex-center mobil-filter--container">
            <div className="mobil-filter--icon">
              <SortIcon width="40" height="40" onClick={()=> {setShowSort(true); setShowOverlay(true) }}/>
            </div>
            <div className="mobil-filter--icon bLeft-grey">
              <FilterIcon width="40" height="40" onClick={()=> {setShowFilter(true); setShowOverlay(true)}}/>
            </div>
            {showFilter && <Filter showFilter={showFilter}  parentCallback={childCall}/> }
            {showSort && <Tabs showSort={showSort} parentCallback={childCall}/> }
          </div>
      </div>

      
    )
}

export default MobileFilter