import {Link} from "react-router-dom"
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown"
import React from "react";
import {useState} from "react";
const Navbar = () => {
  const [login, setLogin] = useState("")

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="padding">
        <a class="navbar-brand" style={{color: "white", fontSize: "30px"}}>AI Code Training</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/" style={{color: "white", fontSize: "25px", textDecoration: "none"}}> Home </Link>
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Lessons" style={{color: "white", fontSize: "25px",textDecoration: "none"}}> Lessons </Link>
            </li>
            <br/>
            <li class="nav-item">

            <Link to="/Challenges" style={{color: "white", fontSize: "25px", textDecoration: "none"}}> Challenges </Link>
              
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Settings" style={{color: "white", fontSize: "25px", textDecoration: "none"}}> Settings </Link>
            </li>
            <br/>
            <li> 
              <div class="profile_link">
              <Link to="/Profile" style={{color: "white", fontSize: "25px", textDecoration: "none"}}> Profile</Link>
              </div>
            </li>
            <li> 
              <div class="dropdown">
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
        Resources
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item > About Us </Dropdown.Item>
        <Dropdown.Item > FAQ </Dropdown.Item>
        
        
      </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
            <br/>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            
            <li class="nav-item text-right">
        
          <form>
            <label for="username" style={{color: "white", fontSize: 20, padding: 20}}> Username: </label>
            <input type="text" id="username" ></input>
            <label for="password" style={{color: "white", fontSize: 20, padding: 20}}> Password: </label>
            <input type="text" id="password" ></input>
              <button class="btn btn-success" type="submit">Login</button>
            
          </form>
          
          </li> 
         
          <div> <Link to="/Signup"><button class="btn btn-success" type="submit"> Sign up </button> </Link></div>
          <br/>
          </ul>
         </div>
         
       
                  </nav>
    );
}
export default Navbar;