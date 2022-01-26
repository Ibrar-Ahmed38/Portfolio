import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link  className="navbar-brand text-black" to="/">Ibrar Ahmed</Link>
          <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-black"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-end">
              <li className="nav-item">
                <Link  className="nav-link text-black active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link text-black" to="/service">Services</Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link text-black" to="/skill">Skills</Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link text-black" to="/contact">Contact</Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link text-black" to="/signin">Sign In</Link>
              </li>

              <li className="nav-item">
                <Link  className="nav-link text-black text-black" to="/register">Register</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
