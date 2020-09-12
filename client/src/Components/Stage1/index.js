import React, { useEffect, useState } from "react";
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
import API from "../../Utils/API"
import "./style.css";


function Stage1Cards() {
    const monsterArray = [
        {
            name: "Orc",
            hp: 100,
            attack: 50,
            defense: 20,
            gil: 45,
            intro: "The savage Orc of Mount Kararak was separated from his horde.  His eyes began to glare as he sees you.  He is ready to crush you!"
        },
        {
            name: "Slime",
            hp: 75,
            attack: 55,
            defense: 15,
            gil: 45,
            intro: "Acidic slime that can melt the toughest armors if absorbed, starts jiggling towards you!"
        },
        {
            name: "Chocobooboo",
            hp: 150,
            attack: 35,
            defense: 10,
            gil: 45,
            intro: "This ain't your regular Honey Boo Boo...this is Chocobooboo! Chocobooboo glares at you with anger after noticing that you stepped on its food!"
        },
        {
            name: "Yevzilla",
            hp: 500,
            attack: 25,
            defense: 5,
            gil: 200,
            intro: "Yevzilla rises out of the ocean! Someone woke him from his slumber! If not defeated quickly, his lazer breath will destroy ALL!"
        },
        {
            name: "Biala-lama",
            hp: 50,
            attack: 40,
            defense: 40,
            gil: 200,
            intro: "Biala-lama nears! Watch out for the elbos and knees of this creature - they are muaitastic!"
        },
        {
            name: "Himadrigotica",
            hp: 150,
            attack: 30,
            defense: 15,
            gil: 45,
            intro: "Himadrigotica is a unique species of a goat that can only be found in the Dark Forest and on Mount Kararak.  It has a nasty kick and an even nastier meeehhh-nsult!"
        },
        {
            name: "Garretpooficus",
            hp: 100,
            attack: 10,
            defense: 35,
            gil: 200,
            intro: "Not much is know about this creature except that it waits for its victims and then throws insults at them"
        },
        {
            name: "Kaiwhywhywhy",
            hp: 90,
            attack: 35,
            defense: 10,
            gil: 200,
            intro: "This creature will defeat you with its WHY WHY WHY attack!"
        }
    ]
    const [monsterStats, setMonsterStats] = useState(
        monsterArray[Math.floor(Math.random() * Math.floor(8))]

    );
    const [win, setWin] = useState(

    );

    const [lose, setLose] = useState(

    );

    const [userStats, setUserStats] = useState(

    );

    // useEffect(() => {
    //     const userId = localStorage.getItem("userId");
    //     API.getStat(userId).then(res => {
    //         setUserStats(res.data)
    //     });
    // }, []);

    const handleAttack = () => {
        console.log("attack")
        const monsterHitPoints = combatAPI.attack(40, monsterStats.hp, monsterStats.defense);
        if (monsterHitPoints <= 0) {
            setWin("You Win");
        } else {
            setMonsterStats({ ...monsterStats, hp: monsterHitPoints })
            // const monsterCounter = combatAPI.monsterRet(100, 20, monsterStats.attack);
            //setUserStats needed
        }
    }

    const handleGuard = () => {
        console.log("guard")
        const userHitPoints = combatAPI.guard(100, 25, monsterStats.attack);
        if (userHitPoints <= 0) {
            setLose("You Lose");
        } else {
            // setUserStats({})
            // setMonsterStats({ ...monsterStats, hp: monsterHitPoints });
        }
    }
    return (
        <Container-fluid>
            <Jumbotron>
                <h1>Your adventure leads you to Stage One!</h1>
            </Jumbotron>
            <Row>
                <Col xs={6} md={4}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }} className="player">
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Player Name</Card.Title>
                                <Card.Text>
                                    Prepare to fight the monster in front of you!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush stats">
                                <ListGroupItem>HP: </ListGroupItem>
                                <ListGroupItem>Attack: </ListGroupItem>
                                <ListGroupItem>Defense: </ListGroupItem>
                                <ListGroupItem>Potion: </ListGroupItem>
                                <ListGroupItem>Gil: </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><Button variant="danger" onClick={handleAttack}>Attack</Button></ListGroupItem>
                                <ListGroupItem><Button variant="warning" onClick={handleGuard}>Guard</Button></ListGroupItem>
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
                        <div className="victory">
                            {win}
                        </div>}
                    {lose &&
                        <div className="loser">
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
                                    {monsterStats.intro}
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


        </Container-fluid>
    );
}

export default Stage1Cards;