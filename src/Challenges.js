import {Link} from "react-router-dom"
import {
    Card,
    Button,
    Modal,
    Form,
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import Navbar from "./Navbar"
import background from "./background image.jpg"
import big from "./big_o_graph.png"
import loop from "./Loop1.png"
import shop from "./shop2.jpg"
import employee from "./employee.png"
import calc from "./calculator.png"
const Challenges = () => {
    return (
         <div>
            <Navbar> </Navbar>
            <div class="container-fluid text-sm-center p-5 bg-light">
            <h1> Challenges </h1>
            <p> Choose a challenge to complete! </p>
            </div>
            
            <div class="simple_program_title">
                <h1> Simple Programs </h1>
                </div>
            <div class="card">
                <div class="card-body">
                <div align="left">
                
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={shop} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Shopping Cart</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Write a shopping cart program</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={employee} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Employee Database </h5>
    <h6 class="card-subtitle mb-2 text-muted"> Write an arraylist of employees</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={calc} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Calculator</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Write a simple calculator program</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div></div>
                </div>
                </div>
            </div>
            <div class="syntax_error_title">
                  <h1> Find the syntax error </h1>
                  </div>
            <div class="card">
            
                <div class="card-body">
                <div align="left" >
                 
             
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={loop} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Infinite Loop Syntax</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Find out what is causing the program to loop infinitely and write the correct solution</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div></div>
                </div>
                </div>
            
            </div>
            <div class="big_o_title">
                <h1> Big O Notation </h1>
                </div>
            <div class="card">
           
            
                <div class="card-body">
               
                <div align="left">
                  
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={big} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Big O Notation Problem Set I</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Find the Big O Notation of the program</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div></div>
                </div>
                <br/>
                <Button > <Link to="/" style={{color: "white"}}> Back to main menu </Link> </Button>
                </div>
            </div>
            
            
         </div>
    );
}
export default Challenges;