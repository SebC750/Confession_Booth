import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import ConfessionCard from './components/ConfessionCard'
function App() {
  
  return (
    <>
    <Navbar/>
     <div className="container mt-5">
      <nav className="border border-top-0 border-start-0 border-end-0 d-flex justify-content-between">
        <h2 className="d-flex align-items-center gap-2"> <i class="bi bi-journal"></i> Today's penance </h2>
        <button className="btn btn-outline-dark d-flex align-items-center rounded-pill mb-2"> <i className="bi bi-plus fs-4"> </i>New confession </button>
      </nav>
          <div className="row">
            <ConfessionCard/>
            <ConfessionCard/>
            <ConfessionCard/>
          </div>
     </div>
    </>
  )
}

export default App
