import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="card">Card</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
