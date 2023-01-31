import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards(props) {
  return (
    <Card class="m-3 p-2 bg-light border"style={{ width: '20rem' }}>
          <Card.Img variant="top" src={ props.src} />
      <Card.Body>
              <Card.Title>{ props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary" className="botonCards">Visitar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;