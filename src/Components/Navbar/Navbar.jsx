import React from 'react'
import gamingconsole from './gamingconsole.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
    <img className='navbar-img' src={gamingconsole} alt="" />
    <div className="navbar-tag">Gameriod</div>
    <div className="navbar-login"><a href='/'>login</a></div>
    </div>
  )
}

export default Navbar
