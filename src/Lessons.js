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
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
const Lessons = () => {
    //const [array, setArray] = useState("");
    return (
         <div>
            <Navbar> </Navbar>
            <h1> Lessons </h1>
            <p> These lessons will help you obtain a better understanding of programming in general </p>
            
            <div class="card">
                <div class="card-body">
                    <div align="left">
                <h1> Unit 1: Basic Syntax </h1>
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title">Basic Syntax I</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write basic syntax</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div>
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title">Basic Syntax II</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write different kinds of data structures</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div>
  <div class="card mx-auto"><div class="card" >
  <div class="card-body">
    <h5 class="card-title">Basic Syntax III</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write a basic program that stores items into a shopping cart.</h6>
    
    <a href="#" class="card-link">Start</a>
    
  </div>
</div></div>
</div>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <div align="left">
                <h1> Unit 2: Objects and Classes </h1>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <div align="left">
                <h1> Unit 3: UML Language </h1>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <div align="left">
                <h1> Unit 4: Inheritance </h1>
                </div>
                </div>
            </div>
            
            <Button > <Link to="/Mainpage"> Back to main menu </Link> </Button>
         </div>
    );
}
export default Lessons;