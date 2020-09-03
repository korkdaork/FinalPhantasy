import React from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function Victories (){
    return (
        <Jumbotron>
        <h1>Victory</h1>
        <p>
            You have been victorious, clearly you were powerful enough to win!
        </p>
        <p>
            <Button href="/store">Try Again?</Button>
        </p>
    </Jumbotron>
    )
}

export default Victories;