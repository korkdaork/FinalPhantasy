import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from "../../Utils/API";
import "./style.css";

function Signups() {

    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });


    // Load all books and store them with setBooks

    // Loads all books and sets them to books

    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadUser())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value })
    };

    // likely to be in the signup than login
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(newUser)
        // if (formObject.title && formObject.author) {
        API.saveUser(
            newUser //not making a new object so {} is not necessary

        )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // }
    };


    return (
        <Form onSubmit={handleFormSubmit}>
            <form-row>
                <form-col>
                    <Form.Control placeholder="First name" onChange={handleInputChange} name="firstName" />
                </form-col>
                <form-col>
                    <Form.Control placeholder="Last name" onChange={handleInputChange} name="lastName" />
                </form-col>
            </form-row>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} name="email" />
                <Form.Text className="text-muted">
                    You will use your email to login.
                    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleInputChange} name="password" />
                <br/>
                <Form.Label>Re-Enter Password</Form.Label>
                <br/>
                <Form.Control type="password" placeholder="Password" onChange={handleInputChange} name="confirmPassword" />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>

        </Form>
        
    );
}
export default Signups;