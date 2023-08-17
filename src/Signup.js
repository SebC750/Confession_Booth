import React from "react";
import {useState} from "react";
import Navbar from "./Navbar.js"
import {
    Card,
    Button,
    Modal,
    Form,
    Col,
    Row,
    Container,
  } from "react-bootstrap";
  import {Link} from "react-router-dom"
const Signup = () => {
    return(
        <div>
            <Navbar></Navbar>
           <h1> Sign up! </h1> 
           <p> Ready to start learning? Join our community to start your journey by providing a few credentials</p>
           <div class="card">
            <div class="card-body">
                <div align="left" style={{padding: 20}}>
           <form>
            <label for="username"> Username: </label>
            <input type="text" id="username"></input> <br/><br/>
            <label for="email"> Email: </label>
            <input type="text" id="email" ></input> <br/><br/>
            <label for="password"> Password: </label>
            <input type="text" id="password" ></input><br/><br/>
            <label for="Repassword"> Retype password: </label>
            <input type="text" id="Repassword" ></input> <br/><br/>
            <input type="submit" value="submit"></input>
            
          </form>
          </div>
          
          </div>
          </div>
          <Button> <Link to="/" style={{color: "white"}}>Back to main page</Link> </Button>
        </div>
    )

}
export default Signup;