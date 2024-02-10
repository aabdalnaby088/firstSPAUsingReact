import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Homeee from '../Homeee/Homeee'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2">
          <NavLink className='navbar-brand text-white' to='Home' >START FRAMEWORK</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-white"  id="topBar" to="Aboutt">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase"  id="topBar" to="Portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase"  id="topBar" to="Contactt">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
