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
import player from "../../Assets/knight.gif"
import sephiroth from "../../Assets/Sephiroth.gif"

function BossCards() {
    // ================================== MONSTER ARRAY ==================================
    const monsterArray = [
        {
            name: "Sephiroth",
            hp: 9999,
            attack: 9999,
            defense: 9999,
            gil: 9999,
            intro: "Sephiroth is the strongest SOLDIER there is. He stands in front of you - you luck has run out... you should have prayed that you didn't cross his path.",
            image: sephiroth
        }
    ]

    // ============================== GAME LOGIC ===============================================
    const [monsterStats, setMonsterStats] = useState(
        monsterArray[Math.floor(Math.random() * Math.floor(1))]

    );

    const [win, setWin] = useState();

    const [lose, setLose] = useState();

    const [run, setRun] = useState();

    // ================================ USER/PLAYER LOGIC & INFO =====================================
    // --------------------- Will pull info from db -------------------------------------
    const [userStats, setUserStats] = useState({
        name: localStorage.getItem("firstName"), hp: "", attack: "", defense: "", potion: "", gil: ""
    });

    console.log(userStats)
    useEffect(() => {
        const userId = localStorage.getItem("id");
        API.getStat(userId).then(res => {
            setUserStats(res.data)
            console.log(res)
        });
    }, []);

    // ==================================== COMBAT LOGIC =======================================
    const handleAttack = () => {
        console.log("attack")
        const monsterHitPoints = combatAPI.attack(userStats.attack, monsterStats.hp, monsterStats.defense);
        if (monsterHitPoints <= 0) {
            const newGil = userStats.gil + monsterStats.gil
            const gilUpdate = { gil: newGil };
            API.saveStat(gilUpdate)
            setUserStats({ ...userStats, gil: newGil })
            setWin("You Win", setTimeout(function () {
                window.location = "/Victory"
            }, 2000));
        } else {
            setMonsterStats({ ...monsterStats, hp: monsterHitPoints });
            const playerHitPoints = combatAPI.monsterRet(userStats.hp, userStats.defense, monsterStats.attack);
            if (playerHitPoints <= 0) {
                setLose("You Lose", setTimeout(function () {
                    window.location = "/Defeat"
                }, 2000));
            } else {
                setUserStats({ ...userStats, hp: playerHitPoints })
            };
        };
    };

    const handleGuard = () => {
        console.log("guard")
        const playerHitPoints = combatAPI.guard(userStats.hp, userStats.defense, monsterStats.attack);
        if (playerHitPoints <= 0) {
            setLose("You Lose", setTimeout(function () {
                window.location = "/Defeat"
            }, 2000));
        } else {
            setUserStats({ ...userStats, hp: playerHitPoints });
            const monsterHitPoints = combatAPI.attack(userStats.attack, monsterStats.hp, monsterStats.defense);
            if (monsterHitPoints <= 0) {
                const newGil = userStats.gil + monsterStats.gil
                const gilUpdate = { gil: newGil };
                API.saveStat(gilUpdate)
                setUserStats({ ...userStats, gil: newGil })
                setWin("You Win", setTimeout(function () {
                    window.location = "/Victory"
                }, 2000));
            } else {
                setMonsterStats({ ...monsterStats, hp: monsterHitPoints });
                // setMonsterStats({ ...monsterStats, hp: monsterHitPoints });
            };
        };
    };

    const handlePotion = () => {
        console.log("potion")
        const playerHitPoints = combatAPI.usePotion(userStats.hp);
        if (userStats.potion >= 1) {
            const playerPotions = combatAPI.reducePotions(userStats.potion);
            setUserStats({ ...userStats, hp: playerHitPoints, potion: playerPotions });
        } else {
            //need to block out the potions button - look at store code
        }
    };

    const handleRun = () => {
        setRun("RUN AWAY!!", setTimeout(function () {
            window.location = "/Defeat"
        }, 2000));
    };
    // ============================= REACT CARDS AND PAGE =====================================
    return (
        <Container-fluid>
            <Jumbotron>
                <h2>Your adventure leads you to the Boss Fight!</h2>
            </Jumbotron>
            <Row>
                <Col xs={6} md={4}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }} className="player">
                            <Card.Img class="sprite_card" variant="top" src={player} />
                            <Card.Body>
                                <Card.Title><b>{userStats && userStats.name}</b></Card.Title>
                                <Card.Text>
                                    You draw your Great Sword of Leeching (small chance to heal yourself during combat)!
                                    <br />
                                    <br />
                                    Prepare to DIE!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup horizontal className="stats">
                                <ListGroupItem><b>HP:</b> {userStats && userStats.hp}</ListGroupItem>
                                <ListGroupItem><b>Attack:</b> {userStats && userStats.attack}</ListGroupItem>
                                <ListGroupItem><b>Defense:</b> {userStats && userStats.defense}</ListGroupItem>
                                <ListGroupItem><b>Potions:</b> {userStats.potion}</ListGroupItem>
                                <ListGroupItem><b>Gil:</b> {userStats.gil}</ListGroupItem>
                            </ListGroup>
                            <ListGroup className="list-group-flush" position="center">
                                <ListGroupItem><Button variant="danger" size="lg" onClick={handleAttack}>Attack</Button>
                                    <Button variant="warning" size="lg" onClick={handleGuard}>Guard</Button>
                                    <Button variant="success" size="lg" onClick={handlePotion}>Potion</Button>
                                    <Button variant="info" size="lg" onClick={handleRun} >Run!</Button></ListGroupItem>
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
                    {run &&
                        <div className="runner">
                            {run}
                        </div>}
                </Col>
                <Col xs={6} md={4}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }} className="enemy">
                            <Card.Img class="sprite_card" variant="top" src={monsterStats.image} />
                            <Card.Body>
                                <Card.Title>{monsterStats.name}</Card.Title>
                                <Card.Text>
                                    {monsterStats.intro}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup horizontal className="stats">
                                <ListGroupItem><b>HP:</b> {monsterStats && monsterStats.hp}</ListGroupItem>
                                <ListGroupItem><b>Attack:</b> {monsterStats && monsterStats.attack}</ListGroupItem>
                                <ListGroupItem><b>Defense:</b> {monsterStats && monsterStats.defense}</ListGroupItem>
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

export default BossCards;