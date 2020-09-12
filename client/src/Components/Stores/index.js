import React, { useContext,useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/axe.png";
import sword from "../../Assets/sword.png";
import hammer from "../../Assets/hammer.png";
import health from "../../Assets/potion.png";
import light from "../../Assets/lightarmor.png";
import heavy from "../../Assets/heavyarmor.png";
import DeveloperContext from "../../Utils/DeveloperContext";
import "./style.css";




function Stores ({buyPotion}){
  const {gilcontext, hpcontext, attackcontext, defensecontext, speedcontext, potioncontext } = useContext(DeveloperContext)

  const [buttonAEnabled, setButtonAEnabled]=useState (true);
  const [buttonBEnabled, setButtonBEnabled]=useState(true);
  const [buttonCEnabled, setButtonCEnabled]=useState (true);
  const [buttonDEnabled, setButtonDEnabled]=useState(true);
  const [buttonEEnabled, setButtonEEnabled]=useState(true);
  const [buttonFEnabled, setButtonFEnabled]=useState(true);
  const [potionButton, setPotionButton]=useState(false);
  const [potion, setPotion]=useState(0);
  const [attack, setAttack]=useState(0);
  const [defense, setDefense]=useState(0);
  const [speed, setSpeed]=useState(0);
  const [hp, setHp]=useState(0);
  const [gil, setGil]=useState(0);

  let numAttack=attack;
  let numDefense=defense;
  let numSpeed=speed;
  let numHp=hp;
  let numGil=gil;

  const handleButtonAPressed = ()=>{
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log (attack, defense, speed, gil);
    numAttack=numAttack+3;
    numDefense=numDefense+5;
    numSpeed=numSpeed+5;
    numGil=gilcontext-5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext",numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
  }

  const handleButtonBPressed = () => {
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log (attack, defense, speed, gil);
    numAttack=numAttack+4;
    numDefense=numDefense+3;
    numSpeed=numSpeed+3;
    numGil=gilcontext-5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext",numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
  }
  const handleButtonCPressed = () =>{
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log (attack, defense, speed, gil);
    numAttack=numAttack+5;
    numDefense=numDefense+2;
    numSpeed=numSpeed+2;
    numGil=gilcontext-5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext",numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
  }
  const handleButtonDPressed = () =>{
    console.log(potion)
    let numPotions=potion;
    numPotions=numPotions +1;
    numGil=gilcontext -10;
    if (numPotions === 5) {
      setPotionButton(true)
    }
    setPotion(numPotions);
    setButtonDEnabled(false);
    buyPotion("potioncontext",numPotions);
    buyPotion("gilcontext", numGil);
  }
  const handleButtonEPressed= ()=>{
    setButtonEEnabled(false);
    setButtonFEnabled(false);
    console.log (hp, attack, defense, speed, gil);
    numHp=numHp+15;
    numAttack=numAttack+0;
    numDefense=numDefense+20;
    numSpeed=numSpeed-3;
    numGil=gilcontext-15;
    setHp(numHp)
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("hpcontext", numHp);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext",numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
  }
  const handleButtonFPressed = ()=>{
    setButtonEEnabled(false);
    setButtonFEnabled(false);
    console.log (hp, attack, defense, speed, gil);
    numHp=numHp+30;
    numAttack=numAttack+0;
    numDefense=numDefense+50;
    numSpeed=numSpeed-10;
    numGil=gilcontext-25;
    setHp(numHp)
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("hpcontext", numHp);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext",numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
  }

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
          <p>Gil: {gilcontext} </p>
        </Jumbotron>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={sword} />
            <Card.Body>
              <Card.Title id="sword">Sword </Card.Title>
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
              <Card.Title id="axe" >Axe </Card.Title>
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
              <Card.Title id="hammer">Mace </Card.Title>
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
            <Card.Img variant="top" src={health} />
            <Card.Body>
              <Card.Title id="potion">Potion </Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item>HP+: 20</ListGroup.Item>
                  <ListGroup.Item>Gil: 10</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button button id="potionButton"
              disabled={potionButton}
              onClick={handleButtonDPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={light} />
            <Card.Body>
              <Card.Title id="light">Light Armor </Card.Title>
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
              <Card.Title id="heavy">Heavy Armor </Card.Title>
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