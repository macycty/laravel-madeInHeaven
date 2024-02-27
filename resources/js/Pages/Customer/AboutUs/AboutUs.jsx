import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chef from '/resources/assets/chef.png';

function AboutUs() {
  return ( 
    <Container id='About' style={{ color: '#DCCA87', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Row style={{marginBottom: '0.5rem', textAlign:'center'}}>
        <h2 style={{fontSize:"5vw"}}>About Us</h2>
      </Row>
      <Row style={{marginLeft: '1rem'}}>
        <Col style={{ marginTop: '3rem'}}>
          <Row>
              <h2 style={{fontSize:"3.5vw"}}>Hello & Welcome To <br/>Made In Heaven</h2>
            </Row>
            <Row>
              <p style={{fontSize:"2.5vw"}}>At Made In Heaven, we believe that dining is not only about nourishing the body but also about feeding the soul. That's why we go the extra mile to create an ambiance that stimulates all your senses. </p>
          </Row>
        </Col>
        
        <Col style={{ margin: '2rem 0rem'}}>
          <img className="d-block w-100" src={chef} alt="First slide"/>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;