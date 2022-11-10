import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="Container">
      <div className="row mt 3">
    <Row xs={1} md={2} className="g-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</div>
</div>
  );
}

export default Home;