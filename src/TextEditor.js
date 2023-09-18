import 'trix/dist/trix.css';
import { TrixEditor } from "react-trix";
import React from "react";
import {useState} from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Col,
  Row,
  Container,
} from "react-bootstrap";
const TextEditor = () => {

    const [awaitingContent, updateAwaitingContent] = useState("")
    const trixEditorProps = {
      value:"Insert text",
      classname:"trix"
    }
    return (
      <div>
      <TrixEditor {...trixEditorProps} />
      <div class="card">
        
      </div>
      <div class="card">
              <div class="card-body" align="left">
              <Button className='btn btn-success'> Submit </Button>
              <Button className='btn btn-success'> Need help? </Button>
              </div>
            
            </div>
            </div>
    );
  
}

export default TextEditor;