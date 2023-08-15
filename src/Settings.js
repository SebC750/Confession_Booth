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
import Dropdown from "react-bootstrap/Dropdown"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
const Settings = () => {
    return (
         <div>
            <Navbar> </Navbar>
            <div class="card" >
                <div class="card-body">

                <div align="left">
                <h1 style={{margin: 20}}> Settings </h1>
                </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                <div align="left">   
                <h3>Difficulty</h3>
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Difficulty setting
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > Easy </Dropdown.Item>
        <Dropdown.Item > Medium </Dropdown.Item>
        <Dropdown.Item > Hard </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

    <h3> Color Theme </h3>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Color theme
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > Light</Dropdown.Item>
        <Dropdown.Item > Dark</Dropdown.Item>
        <Dropdown.Item > System Default </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    </div> 
            </div>
            </div>
                
                
            <Button > <Link to="/Mainpage"> Back to main menu </Link> </Button>
         </div>
    );
}
export default Settings;