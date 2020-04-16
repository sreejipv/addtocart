import React from  'react'

const Tab = props => {
  
  const label = props.label
  const activeTab = props.activeTab

  function onClick () {
    const { label, onClick } = props;
    onClick(label);

  }
  let className = 'sort--label fBold cPointer';

  if (activeTab === label) {
    className += ' sort--active';
  }
    return(
      <li onClick={onClick} className={className}> 
      <div className="radio">
        <div className="circle"></div>
      </div>
        {label}
      </li>
 
    )
}

export default Tab