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
        <div class="container">
          <div class="row">
            <div class="col-md">
            <TrixEditor {...trixEditorProps} />
            <div class="card">
              <div class="card-body" align="left">
              <Button className='btn btn-success'> Submit </Button>
              <Button className='btn btn-success'> Need help? </Button>
              </div>
            
            </div>
            </div>
            <div class="col-3" style={{width: "40%"}}>
              <h3> AI Chatbot </h3>
              <div class="card" style={{height:"96.80%"}}>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Ask anything! </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      
      
      
            </div>
    );
  
}

export default TextEditor;