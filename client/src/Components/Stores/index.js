import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css";

function Stores() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to the Shop</h1>
        <p>
          Please purchase what type of weapon, armor and potions you need for battle.
          Whatever you choose, your defeat inevitible!
  </p>
      </Jumbotron>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="/Assets/axe.png" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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