import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./style.css"

function Logins() {
    return (
      <div className = "container-fluid">
        <Jumbotron>
        <h1>Welcome to Final Phantasy</h1>
        <p>
          Please login below to continue your journey, if you are not a member please 
          signup to get started.
        </p>
        <Button href="/signup">Sign up!</Button>
      </Jumbotron>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           <br/>
            <Button href="/main">Login</Button>
            <br/>
            <hr/>
        </Form>
      </div>
    );
}

export default Logins;