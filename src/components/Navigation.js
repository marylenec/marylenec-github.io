import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Searchbar from './Searchbar'
import Cart from './Cart'

const activeStyle = {
    borderBottom: "2px solid #FFFFFF"
  }

const NavBar = (props) => {
      return (
        <div className='Navigation'>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div className="container">
                <NavLink exact to='/home' className="logo navbar-brand js-scroll-trigger" href="#page-top">Elizabeth Andrade Arnold</NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink exact to="/about" activeStyle={activeStyle} className="nav-link js-scroll-trigger">About</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => props.onSelectedWorksHandler('mixed media', 'Original')}>
                      <NavLink exact to="/mixed_media" activeStyle={activeStyle} className="nav-link js-scroll-trigger"
                       >Mixed Media</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => props.onSelectedWorksHandler('mixed media', 'Faces')}>
                      <NavLink exact to="/faces"  activeStyle={activeStyle} className="nav-link js-scroll-trigger">Faces</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => props.onSelectedWorksHandler('photography based mixed media', 'Original')}>
                      <NavLink exact to="/photography"  activeStyle={activeStyle} className="nav-link js-scroll-trigger">Photography</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to="/contact"  activeStyle={activeStyle} className="nav-link js-scroll-trigger">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#instagram"><i className="fa fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
      )
    }

    export default NavBar
