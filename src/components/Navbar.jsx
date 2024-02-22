import React from 'react'
import {Link } from 'react-router-dom';
import './navbar.scss'


function Navbar() {
  return (<nav className='navbar'>
    <Link to="/">
    <div className='navbar__logo'>
        <img src="logo.png" alt="Logo"/>
    </div>
    </Link>
    <Link to="/">
      Accueil
    </Link>
    <Link to="/about">
      A propos
    </Link>
      
  </nav>
  )
}

export default Navbar;

