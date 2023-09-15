import {Link} from "react-router-dom"
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
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
              <Link to="/" style={{color: "white", fontSize: "20px"}}> Home </Link>
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Lessons" style={{color: "white", fontSize: "20px"}}> Lessons </Link>
            </li>
            <br/>
            <li class="nav-item">

            <Link to="/Challenges" style={{color: "white", fontSize: "20px"}}> Challenges </Link>
              
            </li>
            <br/>
            <li class="nav-item">
            <Link to="/Settings" style={{color: "white", fontSize: "20px"}}> Settings </Link>
            </li>
            <br/>
            <li> 
              <Link to="/Profile" style={{color: "white", fontSize: "20px"}}> Profile</Link>
            </li>
            <br/>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li> Profile </li>
            <li class="nav-item text-right">
        
          <form>
            <label for="username" style={{color: "white"}}> Username: </label>
            <input type="text" id="username"></input>
            <label for="password" style={{color: "white"}}> Password: </label>
            <input type="text" id="password" ></input>
            <input type="submit" value="submit"></input>
            
          </form>
          
          </li> 
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          <div align="right"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> <Link to="/Signup">Sign up </Link></button></div>
          <br/>
          </ul>
         </div>
         
       
                  </nav>
    );
}
export default Navbar;