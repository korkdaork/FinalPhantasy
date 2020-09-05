import React from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function Defeats (){
    return (
        <Jumbotron>
        <h1>Defeat</h1>
        <p>
            You have been defeated, clearly you weren't as powerful as you thought.
        </p>
        <p>
            <Button href="/store">Try Again?</Button>
        </p>
    </Jumbotron>
    )
}

export default Defeats;