import React from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";
import defeat_animation from "../../Assets/defeat_animation_final_1024.gif"

function Defeats() {
    return (
        <Jumbotron>
            <img id="defeat_gif" src={defeat_animation} />
            <p>
                <Button href="/store">Try Again?</Button>
            </p>
            
        </Jumbotron>
    )
}

export default Defeats;