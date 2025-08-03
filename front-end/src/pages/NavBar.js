import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

export const NavBar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Login" className="nav-link">Login</Link>
        <Link to="/Products" className="nav-link">Products</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  )
}