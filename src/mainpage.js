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
            <h1> Welcome to the AI Code Tutor Program </h1>
            <p> This website allows you to learn about coding with the assistance of AI technology, which will instruct and correct your code to improve your prgramming skills. To begin, input your code onto the textbox below!</p>
            <TextEditor></TextEditor>
            <h2 align="left"> Results </h2>
            <div class="card">
              <div class="card-body">
              Code results and corrections will be displayed here.
              </div>
            
            </div>
            <div align="right">
            <button class="btn btn-primary p-4 rounded-0">
     ?
    </button>
            </div>
        </div>
    )
}

export default Mainpage;