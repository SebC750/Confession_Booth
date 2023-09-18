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
import tag from "./self_tag.png"
import classPic from "./classes.png"
import uml from "./uml.png"
import inherit from "./inherit_pic.jpg"
const Lessons = () => {
    //const [array, setArray] = useState("");
    return (
         <div>
            <Navbar> </Navbar>
            <div class="container-fluid text-sm-center p-5 bg-light">
            <h1> Lessons </h1>
            <p> These lessons will help you obtain a better understanding of programming in general </p>
            </div>
            <div class="simple_program_title">
                      <h1> Unit 1: Basic Syntax </h1>
                      </div>
            <div class="card">
              
            
                <div class="card-body">
                
                    <div align="left">
                      
                
                <div class="d-flex flex-row">
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={tag} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Basic Syntax I</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write basic syntax</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={tag} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Basic Syntax II</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write basic syntax</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
  <div class="card mx-auto"><div class="card" >
  <img class="card-img-top" src={tag} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Basic Syntax III</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn how to write basic syntax</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
</div>
                </div>
                </div>
            </div>

            <div class="objects_title">
            <h1> Unit 2: Objects and Classes </h1>
            </div>
            
            <div class="card">
            
                <div class="card-body">
                <div align="left">
                <div class="d-flex flex-row">
                <div class="card mx-auto"><div class="card" >
                <img class="card-img-top" src={classPic} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Objects and Classes I</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn the basic syntax for creating classes and objects </h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={classPic} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Objects and Classes II</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn the basic syntax for creating classes and objects </h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={classPic} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Objects and Classes III</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn the basic syntax for creating classes and objects </h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
</div>
                </div>
                </div>
            </div>
            <div class="uml_title">
            <h1> Unit 3: UML Language </h1>
            </div>
            
            <div class="card">
                <div class="card-body">
                <div align="left">
                <div class="d-flex flex-row">
                <div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={uml} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> UML Language I</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about UML and how to visualize relationships</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={uml} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> UML Language II</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about UML and how to visualize relationships</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={uml} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> UML Language III</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about UML and how to visualize relationships</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
</div>
                </div>
                </div>
            </div>
            <div class="inherit_title">
            <h1> Unit 4: Inheritance </h1>
            </div>
           
            <div class="card">
                <div class="card-body">
                <div align="left">
                <div class="d-flex flex-row">
                <div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={inherit} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Inheritance I</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about Inheritance and superclasses</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={inherit} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Inheritance II</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about Inheritance and superclasses</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
<div class="card mx-auto"><div class="card" >
<img class="card-img-top" src={inherit} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> Inheritance III</h5>
    <h6 class="card-subtitle mb-2 text-muted">In this lesson, we learn about Inheritance and superclasses</h6>
    
    <a href="#" class="btn btn-primary">Start</a>
    
  </div>
</div></div>
                </div>
                </div>
                <br/>
                <Button > <Link to="/" style={{color: "white"}}> Back to main menu </Link> </Button>
                </div>
            </div>
            
            
         </div>
    );
}
export default Lessons;