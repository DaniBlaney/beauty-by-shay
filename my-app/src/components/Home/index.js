import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';



const HomePage = () => {
  return (
    <>
      <NavBarComponent />
      <h2 className="heading" align="center">Beauty Blog By Shay</h2>
      <Container fluid>
        <Row>
          <Col>
            <Card className="cardStyle" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/haircut.png" />
              <Card.Body>
                <Card.Title>About me</Card.Title>
                <Card.Text>
                  Graduated Raritan Valley Community College Cosmetology and Hair Styling Program.
            </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardStyle" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/hairheart.png" />
              <Card.Body>
                <Card.Title>Why I love my profession</Card.Title>
                <Card.Text>
                  I find it rewarding to help people bring out their own natural beauty.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardStyle" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/shayy.png" />
              <Card.Body>
              <Button href="/gallery" variant="light" block>
                <Card.Title>Gallery</Card.Title>
              </Button>
                <Card.Text>
                  Check out some of the work I have done!

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Card.Img className="cardStyle" style={{ width: '33em' }} src="./images/fringe.png" />
          </Col>
          <Col md={6}>
            <Card className="cardStyle">
              <Card.Header>Certifications</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <ul>
                    {' '}
                    <li>{"\u2728"} La Bella Hair Extension Certified |</li>
                    <li>{"\u2728"} Certified in Cut it Out |</li>
                    <li>{"\u2728"} Wella Custom Product Certified |</li>
                    <li>{"\u2728"} Wella Custom Color Essentials Cert |</li>
                    <li>{"\u2728"} Barbicide Certified |</li>
                    <li>{"\u2728"} Eyes On Cancer Melanoma Awareness Certified |</li>
                    <li>{"\u2728"} CPR & First Aid Certified |</li>
                    {' '}
                  </ul>
                  <footer className="blockquote-footer">
                    Additional skills: <cite title="Source Title">Sign Language</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}


export default HomePage;
