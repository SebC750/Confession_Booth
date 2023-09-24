import 'trix/dist/trix.css';
import { TrixEditor } from "react-trix";
import Editor from "@monaco-editor/react";
import React from "react";
import {useState} from "react";
import file from "./file_icon.svg"
import {
  Card,
  Button,
  Modal,
  Form,
  Col,
  Row,
  Container,
  Dropdown,
} from "react-bootstrap";
const TextEditor = () => {

    const [awaitingContent, updateAwaitingContent] = useState("")
    const code = "console.log('Code Mirror!');"
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md">
              <h3> Code Editor </h3>
              <Editor
      height="1050px"
      language="javascript"
      theme="vs-light"
      value={code}
      options={{
        inlineSuggest: true,
        fontSize: "24px",
        formatOnType: true,
        autoClosingBrackets: true,
        
      }}
    />
            <div class="card">
              <div class="card-body" align="left">
                <div class="space">
              <Button className='btn btn-success'> Submit </Button>
              
              <Button className='btn btn-success'> Need help? </Button>
              
              <Button className="btn btn-success"> <img src={file}></img>Upload file</Button>
              <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose language
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item > Java </Dropdown.Item>
        <Dropdown.Item > Python </Dropdown.Item>
        <Dropdown.Item > Scala </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
              </div>
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