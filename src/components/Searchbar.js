import React from 'react'

const Searchbar = (props) => {
  return(
    <div className="search">
      <span className="fa fa-search"></span>
      <input type="text" onChange={props.onChangeHandler} value={props.value} placeholder="Search term"/>
    </div>
  )
}

export default Searchbar
