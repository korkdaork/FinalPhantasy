import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./style.css"

function Logins() {

//   const [loadUser, setLoadUser] = useState({ email: "", password: "" });

//   // Load all books and store them with setBooks

//   // Loads all books and sets them to books

//   // Handles updating component state when the user types into the input field

//   // likely to be in the signup than login
//   const { id } = useParams()
//   useEffect(() => {
//     API.getUser(id)
//       .then(res => setLoadUser(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   function handleBtnClick(event) {
//     // Get the title of the clicked button
//     const btnName = event.target.getAttribute("data-value");
//     if (btnName === "next") {
//       const newUserIndex = userIndex + 1;
//       nextUser(newUserIndex);
//     } else {
//       const newUserIndex = userIndex - 1;
//       previousUser(newUserIndex);
//     }
}

  return (
    <div>
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
          <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} name="email" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onClick={handleInputChange} name="password" />
        </Form.Group>

        <Button href="/main">Login</Button>
      </Form>
    </div>
  );
}

export default Logins;