import React, { useContext,useState} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/axe.png";
import sword from "../../Assets/sword.png";
import hammer from "../../Assets/hammer.png";
import potions from "../../Assets/potion.png";
import light from "../../Assets/lightarmor.png";
import heavy from "../../Assets/heavyarmor.png";
import DeveloperContext from "../../Utils/DeveloperContext";
import "./style.css";




function Stores (){
  const [buttonAEnabled, setButtonAEnabled]=useState (true);
  const [buttonBEnabled, setButtonBEnabled]=useState(true);
  const [buttonCEnabled, setButtonCEnabled]=useState (true);
  const [buttonDEnabled, setButtonDEnabled]=useState(true);
  const [buttonEEnabled, setButtonEEnabled]=useState(true);
  const [buttonFEnabled, setButtonFEnabled]=useState(true);

  const handleButtonAPressed = ()=>{
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
  };

  const handleButtonBPressed = () => {
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
  }
  const handleButtonCPressed = () =>{
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
  }
  const handleButtonDPressed = () =>{
    setButtonDEnabled(false);
    
  }
  const handleButtonEPressed= ()=>{
    setButtonEEnabled(false);
    setButtonFEnabled(false);
  }
  const handleButtonFPressed = ()=>{
    setButtonEEnabled(false);
    setButtonFEnabled(false);
  }


const { gil, hp, attack, defense, speed, potion } = useContext(DeveloperContext)
  return (
  
    

      <div>
        <Jumbotron>
          <h1>Welcome to the Shop</h1>
          <p>
            Please purchase what type of weapon, armor and potions you need for battle.
            Whatever you choose, your defeat is inevitible! When you have purchased
            everything you need, please click below to proceed to your first fight!.
        </p>
          <p>
            <Button 
            
            href="/stage1">Continue Adventure</Button>
          </p>
          <p>Gil: {gil} </p>
        </Jumbotron>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={sword} />
            <Card.Body>
              <Card.Title id="sword">Sword</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>Attack: 3</ListGroup.Item>
                  <ListGroup.Item>Defense: 5</ListGroup.Item>
                  <ListGroup.Item>Speed: 5</ListGroup.Item>
                  <ListGroup.Item>Gil: 5</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonAEnabled}
              onClick={handleButtonAPressed}
              id="buy" variant="primary">Buy</Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={axe} />
            <Card.Body>
              <Card.Title id="axe" >Axe</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>Attack: 4</ListGroup.Item>
                  <ListGroup.Item>Defense: 3</ListGroup.Item>
                  <ListGroup.Item>Speed: 3</ListGroup.Item>
                  <ListGroup.Item>Gil: 5</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonBEnabled}
              onClick={handleButtonBPressed}
              id="buy" variant="primary">Buy</Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={hammer} />
            <Card.Body>
              <Card.Title id="hammer">Mace</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>Attack: 5</ListGroup.Item>
                  <ListGroup.Item>Defense: 2</ListGroup.Item>
                  <ListGroup.Item>Speed: 2</ListGroup.Item>
                  <ListGroup.Item>Gil: 5</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonCEnabled}
              onClick={handleButtonCPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={potions} />
            <Card.Body>
              <Card.Title id="potion">Potion</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>HP+: 20</ListGroup.Item>
                  <ListGroup.Item>Gil: 10</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonDEnabled}
              onClick={handleButtonDPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={light} />
            <Card.Body>
              <Card.Title id="light">Light Armor</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>HP: 15</ListGroup.Item>
                  <ListGroup.Item>Attack: 0</ListGroup.Item>
                  <ListGroup.Item>Defense: 20</ListGroup.Item>
                  <ListGroup.Item>Speed: -3</ListGroup.Item>
                  <ListGroup.Item>Gil: 15</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonEEnabled}
              onClick={handleButtonEPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={heavy} />
            <Card.Body>
              <Card.Title id="heavy">Heavy Armor</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>HP: 30</ListGroup.Item>
                  <ListGroup.Item>Attack: 0</ListGroup.Item>
                  <ListGroup.Item>Defense: 50</ListGroup.Item>
                  <ListGroup.Item>Speed: -10</ListGroup.Item>
                  <ListGroup.Item>Gil: 25</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              disabled={!buttonFEnabled}
              onClick={handleButtonFPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
          </Card>
        </CardGroup>
      </div>
      
  );


}


export default Stores;