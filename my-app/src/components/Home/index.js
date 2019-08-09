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
            <Card.Img className="cardStyle" src="./images/hairheart.jpg" />
          </Col>
          <Col>
            <Card className="cardStyle">
              <Card.Header>About me</Card.Header>
              <Card.Body>
                <Card.Title bold> Education </Card.Title>

                <Card.Text>Recently graduated Raritan Valley
                  Community College Cosmetology and Hair Styling Program.
                <hr />
                </Card.Text>
                <Card.Title bold> Why do I love my profession?</Card.Title>
                <Card.Text>
                  I find it rewarding to help people bring out their own natural beauty.
                  Being a hairstylist is more than just about hair. It is about making personal
                  connections with your clients and helping anyone who sits in your chair
                  find their beauty, inside and out!
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
                  Click here to see some of my client transformations before and after pictures!
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
            <Card className="bg-dark text-white cardStyle">
              <Card.Img src="./images/fringe.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Currently training in Aveda Certification and working at Fringe!</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardStyle cert">
              <Card.Header align="center">Certifications</Card.Header>
              <Card.Body align="left">
                <blockquote className="blockquote mb-0">
                  <ul className="otis">
                    {' '}
                    <li>{"\u2728"} La Bella Hair Extension Certified </li>
                    <li>{"\u2728"} Certified in Cut it Out </li>
                    <li>{"\u2728"} Wella Custom Product Certified </li>
                    <li>{"\u2728"} Wella Custom Color Essentials Cert </li>
                    <li>{"\u2728"} Barbicide Certified </li>
                    <li>{"\u2728"} Eyes On Cancer Melanoma Awareness Certified </li>
                    <li>{"\u2728"} CPR & First Aid Certified </li>
                    <li>{"\u2728"} Additional skills: <cite title="Source Title">Sign Language</cite></li>
                    {' '}
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
      <FooterComponent />
    </>
  );
}


export default HomePage;
