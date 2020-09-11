import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import combatAPI from "../../Utils/combatAPI"
import "./style.css";

function Stage1Cards() {
    const monsterArray = [
        {
            name: "Orc",
            hp: 100,
            attack: 50,
            defense: 20,
            gil: 45
        },
        {
            name: "Slime",
            hp: 75,
            attack: 55,
            defense: 15,
            gil: 45
        },
        {
            name: "Chocobooboo",
            hp: 150,
            attack: 35,
            defense: 10,
            gil: 45
        }
    ]
    const [monsterStats, setMonsterStats] = useState(
        monsterArray[Math.floor(Math.random() * Math.floor(3))]

    );
    const [win, setWin] = useState(

    )
    const [lose, setLose] = useState(

    )

    const handleAttack = () => {
        console.log("attack")
        const newHitPoints = combatAPI.attack(40, monsterStats.hp, monsterStats.defense);
        if (newHitPoints <= 0) {
            setWin("You Win");
        } else {
            setMonsterStats({ ...monsterStats, hp: newHitPoints });
        }
    }
    return (
        <Container>
            <Jumbotron>
                <h1>Your adventure leads you to Stage One!</h1>
                <p>
                    Prepare to fight the monster in front of you!
                </p>
            </Jumbotron>
            <Row>
                <Col xs={6} md={4}>
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
                                <ListGroupItem><Button variant="danger" onClick={handleAttack}>Attack</Button></ListGroupItem>
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
                <Col xs={6} md={4}>
                    {win &&
                        <div>
                            {win}
                        </div>}
                    {lose &&
                        <div>
                            {lose}
                        </div>}
                </Col>
                <Col xs={6} md={4}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }} className="enemy">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>{monsterStats.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush stats">
                                <ListGroupItem>HP: {monsterStats && monsterStats.hp}</ListGroupItem>
                                <ListGroupItem>Attack: {monsterStats && monsterStats.attack}</ListGroupItem>
                                <ListGroupItem>Defense: {monsterStats && monsterStats.defense}</ListGroupItem>
                            </ListGroup>
                            {/* <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body> */}
                        </Card>
                    </CardGroup>
                </Col>
            </Row>


        </Container>
    );
}

export default Stage1Cards;