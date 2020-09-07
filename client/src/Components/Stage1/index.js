import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import "./style.css";

function Stage1Cards() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Jumbotron>
                <h1>Your adventure leads you to Stage One!</h1>
                <p>
                    Prepare to fight the monster in front of you!
    </p>
            </Jumbotron>
            <Col xs={6} className="justify-content-left">
                <CardGroup>
                    <Card style={{ width: '18rem' }} className="player">
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush stats">
                            <ListGroupItem>Attack: </ListGroupItem>
                            <ListGroupItem>Defense: </ListGroupItem>
                            <ListGroupItem>Speed: </ListGroupItem>
                        </ListGroup>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><Button variant="danger">Attack</Button></ListGroupItem>
                            <ListGroupItem><Button variant="warning">Guard</Button></ListGroupItem>
                            <ListGroupItem><Button variant="success">Potion</Button></ListGroupItem>
                            <ListGroupItem><Button variant="info">Run!</Button></ListGroupItem>
                        </ListGroup>
                        {/* <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body> */}
                    </Card>
                </CardGroup>
            </Col>
            <Col xs={6} className="justify-content-right">
                <CardGroup>
                    <Card style={{ width: '18rem' }} className="enemy">
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush stats">
                            <ListGroupItem>Attack: </ListGroupItem>
                            <ListGroupItem>Defense: </ListGroupItem>
                            <ListGroupItem>Speed: </ListGroupItem>
                        </ListGroup>
                        {/* <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body> */}
                    </Card>
                </CardGroup>
            </Col>
        </Container>
    );
}

export default Stage1Cards;