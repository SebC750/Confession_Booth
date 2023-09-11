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
const Challenges = () => {
    return (
         <div>
            <Navbar> </Navbar>
            <h1> Challenges </h1>
            <p> Choose a challenge to complete! </p>
            <div class="card">
                <div class="card-body">
                <div align="left">
                <div class="simple_program_title">
                <h1> Simple Programs </h1>
                </div>
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title"> Shopping Cart</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Write a shopping cart program</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div></div>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <div align="left" >
                  <div class="syntax_error_title">
                  <h1> Find the syntax error </h1>
                  </div>
             
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title"> Infinite Loop Syntax</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Find out what is causing the program to loop infinitely and write the correct solution</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div></div>
                </div>
                </div>
            
            </div>
            <div class="card">
                <div class="card-body">
                <div align="left">
                  <div class="big_o_title">
                <h1> Big O Notation </h1>
                </div>
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title"> Big O Notation Problem Set I</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Find the Big O Notation of the program</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div></div>
                </div>
                </div>
            </div>
            <Button > <Link to="/Mainpage" style={{color: "white"}}> Back to main menu </Link> </Button>
         </div>
    );
}
export default Challenges;