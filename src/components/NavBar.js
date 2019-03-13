import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Searchbar from './Searchbar'
import Cart from './Cart'

  const activeStyle = {
    borderBottom: "2px solid #FFFFFF"
  }

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <NavLink exact to='/' ><h1>Elizabeth Andrade Arnold</h1></NavLink>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/mixed_media"  activeStyle={activeStyle}>Mixed Media</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/faces"  activeStyle={activeStyle}>Faces</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/photography"  activeStyle={activeStyle}>Photography</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/contact"  activeStyle={activeStyle}>Contact</NavLink>
          </li>
          <li className='Searchbar nav-item'>
          <Searchbar onChangeHandler={props.onChangeHandler} value={props.searchTerm}/>
          </li>
        </ul>
        </div>
        <ul className="nav navbar-nav navbar-right">
        <li className='nav-item cart'>
        <NavLink exact to="/cart" activeStyle={{
        textDecoration: 'underline'
      }}><i className="fa fa-shopping-cart"/></NavLink>
      </li>
        </ul>
    </nav>
  )
}

export default NavBar
