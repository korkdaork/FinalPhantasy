import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

function Signups() {

    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();

    // // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadUser()
    // }, [])

    // // Loads all books and sets them to books
    // function loadUser() {
    //     API.getUsers()
    //         .then(res =>
    //             setUsername(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadUser())
    //         .catch(err => console.log(err));
    // }

    // // Handles updating component state when the user types into the input field
    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setPassword({ ...formObject, [name]: value })
    // };

    // // likely to be in the signup than login
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //         API.saveUser({
    //             title: formObject.title,
    //             author: formObject.author,
    //             synopsis: formObject.synopsis
    //         })
    //             .then(res => loadUser())
    //             .catch(err => console.log(err));
    //     }
    // };

    // return (
    //     <Form>
    //         <form-row>
    //             <form-col>
    //                 <Form.Control placeholder="First name" />
    //             </form-col>
    //             <form-col>
    //                 <Form.Control placeholder="Last name" />
    //             </form-col>
    //         </form-row>
    //         <Form.Group controlId="formBasicEmail">
    //             <Form.Label>Email address {username.length} </Form.Label>
    //             <Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)} />
    //             <Form.Text className="text-muted">
    //                 You will use your email to login.
    //                 </Form.Text>
    //         </Form.Group>

    //         <Form.Group controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" />
    //             <Form.Label>Re-Enter Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    //         </Form.Group>
    //         <Button href="/main">Submit</Button>

    //     </Form>
    // );
}
export default Signups;