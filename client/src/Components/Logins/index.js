import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import API from '../../Utils/API'

import "./style.css"
import { Alert } from "react-bootstrap";

function Logins() {

  const [loadUser, setLoadUser] = useState({ email: "", password: "" });

  // // Load all books and store them with setBooks

  // // Loads all books and sets them to books

  // // Handles updating component state when the user types into the input field

  function handleInputChanges(e) {
    const name = e.target.name
    const value = e.target.value

    // model of useState name : "value"
    setLoadUser({ ...loadUser, [name]: value })
  }

  // likely to be in the signup than login
  // const { id } = useParams()
  // useEffect(() => {
  //   API.getUser(id)
  //     .then(res => setLoadUser(res.data))
  //     .catch(err => console.log(err));
  // }, [])
  function handleFormSubmit(e) {
    e.preventDefault();
    if (loadUser.email === "" || loadUser.password === "") {
      alert("Invalid login")
    }
    else {
      API.login(loadUser)
        .then(res => {
          if (res.data.success) {
            window.location = "/main"
          } else {
            alert("Invalid Login")
          }
        })
        .catch(err => console.log(err));
    }
  }

  // function handleBtnClick(event) {
  //   // Get the title of the clicked button
  //   const btnName = event.target.getAttribute("data-value");
  //   if (btnName === "next") {
  //     const newUserIndex = userIndex + 1;
  //     nextUser(newUserIndex);
  //   } else {
  //     const newUserIndex = userIndex - 1;
  //     previousUser(newUserIndex);
  //   }
  // }

  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Welcome to Final Phantasy</h1>
        <p>
          Please login below to continue your journey, if you are not a member please
          signup to get started.
        </p>
        <Button href="/signup">Sign up!</Button>
      </Jumbotron>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleInputChanges} name="email" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleInputChanges} name="password" />
        </Form.Group>
        <br />
        <Button type="submit">Login</Button>
        <br />
        <hr />
      </Form>
    </div>
  );
}

export default Logins;