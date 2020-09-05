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

function BossCards() {
    return (
        <Container fluid="md">
            <Jumbotron>
                <h1>Your adventure leads you to the Boss Battle!!</h1>
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
            <br/>
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
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </Container>
    );
}

export default BossCards;