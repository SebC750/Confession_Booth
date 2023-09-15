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
  
import logo from "./frog profile pic.jpg"
import Navbar from "./Navbar"
const Profile = () =>{
    
    return(
        <div>
            <Navbar></Navbar>
            <div align="left">
                <h1 class="text-left" style={{margin: 20}}> Profile </h1>
                
                
            </div>
            <div class="card">
            
            <h1 align="center" class="profile_name"> <img src={logo} align="left" class="img-thumbnail"/> Sebastian Chalarca</h1>
            </div>
            <div class="card">
                <div class="card-body">
                
                <div align="left">
                <h3> Biography </h3>
                <p style={{padding: 10}}> My name is Sebastian! I like to code!</p>
                <h3> Progress Report</h3>
                <ul>
                   <p>Lessons completed: 0 </p> 
                   <p> Challenges completed: 0 </p> 
                   <p>Total number of Achievements Completed: 0 </p>
                </ul>
                </div>
                <Button > <Link to="/" style={{color: "white"}}> Back to main menu </Link> </Button>
                </div>
                
            </div>
            
           
        </div> 
    );
    }
    export default Profile;