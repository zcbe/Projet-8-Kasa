import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
  return (<nav className='navbar'>
    <div className='navbar__logo'>
        <img src="logo.png" alt="Logo"/>
    </div>
    <Link to="/">Accueil</Link>
    <Link to="/about">
    <div>A propos</div>
    </Link>
      
  </nav>
  )
}

export default Navbar;

