import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar container justify-content-between align-items-center gap-2 border border-top-0 border-start-0 border-end-0 border-bottom-3">
        <h1 className="fw-bold"> Father Joe's Booth </h1>
        <div className="nav align-items-center gap-2">
          <Link to="/" className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2"> <i class="bi bi-journal fs-4"></i> Confessions </Link>
          <Link to="/About" className="btn btn-outline-dark rounded-pill d-flex align-items-center"> <i className="bi bi-question fs-4"></i> </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar