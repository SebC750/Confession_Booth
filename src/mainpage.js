//import nav from 'react-bootstrap/nav';
import {
  Card,
  Button,
  Modal,
  Form,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import Trix from 'trix'
import TextEditor from "./TextEditor";
import Navbar from "./Navbar"

function Mainpage () {

    return (
        <div>
           <Navbar></Navbar>
            <div class="container-fluid text-sm-center p-5 bg-light">
            <h1> Welcome to the AI Code Tutor Program </h1>
            
            <p> This website allows you to learn about coding with the assistance of AI technology, which will instruct and correct your code to improve your prgramming skills. To begin, input your code onto the textbox below!</p>
            </div>
            
           
            <TextEditor></TextEditor>
           
            
            
           
            
            <div  class="container">
            <h2 align="left"> Results </h2>
            <div class="card">
              <div class="card-body">
              Code results and corrections will be displayed here.
              </div>
            
            </div>
            </div>
            
        </div>
    )
}

export default Mainpage;