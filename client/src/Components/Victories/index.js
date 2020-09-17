import React from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function Victories (){
    return (
        <Jumbotron>
        <div class = 'container projects'>
            <h1 class = "win">VICTORY</h1>
            <div class="overlay"></div>
            
        </div>
        <p>
            <Button href="/store">Try Again?</Button>
        </p>
    </Jumbotron>
    )
}

export default Victories;