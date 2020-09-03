import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

function Signups() {
    return (
            <Form>
                <form-row>
                    <form-col>
                        <Form.Control placeholder="First name" />
                    </form-col>
                    <form-col>
                        <Form.Control placeholder="Last name" />
                    </form-col>
                </form-row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        You will use your email to login.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button href="/main">Submit</Button>

            </Form>
    );
}
export default Signups;