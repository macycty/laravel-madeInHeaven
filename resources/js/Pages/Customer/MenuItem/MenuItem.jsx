import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function MenuLayout({ menu }) {

    var dt = menu.menu.filter((menu) => menu.menu_status == 'Available')
      .map((menu, i) => 
      <Col  style={{ marginBottom: '3rem'}}>
        <Card key={i}>
          <Card.Img variant="top" src={menu.menu_image} />
          <Card.Body>
            <Card.Title>{menu.menu_name}</Card.Title>
            <Card.Text  style={{height:'120px'}}>
              Ingredients: {menu.ingredients}<br/>
            </Card.Text>
            <Card.Text>
              Price: £{menu.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    );
    
  return (  

      <Container id='Menu' style={{ background: '#DCCA87'}}>
        <Row style={{textAlign:'center'}}>
          <h2 style={{fontSize:"5vw", margin:'3rem 0rem'}}><u><b>Menu</b></u></h2>
        </Row>
        <Row xs={1} md={2} lg={4} className="justify-content-md-center" style={{margin: '1rem 1.5rem'}}>
          {dt}
        </Row>
      </Container>

  );
}
