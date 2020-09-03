import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/axe.png";
import sword from "../../Assets/sword.png";
import hammer from "../../Assets/hammer.png";
import potion from "../../Assets/potion.png";
import light from "../../Assets/lightarmor.png";
import heavy from "../../Assets/heavyarmor.png";

import "./style.css";

function Stores() {
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
           <Button href="/stage1">Continue Adventure</Button>
        </p>
      </Jumbotron>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={sword} />
          <Card.Body>
            <Card.Title>Sword</Card.Title>
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
            <Button variant="primary">Buy</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={axe} />
          <Card.Body>
            <Card.Title>Axe</Card.Title>
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
            <Button variant="primary">Buy</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={hammer}/>
          <Card.Body>
            <Card.Title>Mace</Card.Title>
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
            <Button variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={potion} />
          <Card.Body>
            <Card.Title>Potion</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>HP+: 20</ListGroup.Item>
                <ListGroup.Item>Gil: 10</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={light} />
          <Card.Body>
            <Card.Title>Light Armor</Card.Title>
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
            <Button variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={heavy}/>
          <Card.Body>
            <Card.Title>Heavy Armor</Card.Title>
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
            <Button variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Stores;