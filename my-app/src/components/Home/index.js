import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';



const HomePage = () => {
  return (
    <>
      <NavBarComponent />

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Img className="cardStyle imgStyle" src="./images/fade.png" />
          </Col>
        </Row>
        <hr />
        <Row className="cardStyle" style={{ backgroundColor: '#ffb6c17a', height: '375px' }}>
            <Col md={3}>
              <Card.Img src="./images/headshot.jpeg" style={{ width: '200px' }} />
            </Col>
            <Col md={9}>
              <h2 className="About" style={{textDecorationLine: 'underline' }}>About</h2>
              <h5>Education:</h5>
                <p>Recently graduated Raritan Valley Community College Cosmetology and Hair Styling Program.</p>
              <h5>Why do I love my Profession?</h5>
                <p>I find it rewarding to help people bring out their own natural beauty. Being a hairstylist is more than just about hair. It is about making personal connections with your clients and helping anyone who sits in your chair find their beauty, inside and out! Click the gallery page and check out some of my client transformation pictures!</p>
            </Col>
          </Row>
      </Container>
      <hr />
      <Container fluid className="full-height">
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
              <Card.Header className="headerSize" style={{ fontWeight: 'bold' }} align="center">Certifications</Card.Header>
              <Card.Body align="left">
                <blockquote className="blockquote mb-0">
                  <ul className="otis demopara">
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
        <hr/>
        <Card className="cardStyle" style={{ backgroundColor: '#ffb6c17a', height: '375px' }}>
          <Row>
            <Col></Col>
            <Col style={{alignContent:'center'}}>
             <img src="./images/servies.png" style={{height: '400px'}}></img>
            </Col>
            <Col></Col>
            </Row>
          </Card>
      </Container>
      <hr />
      <FooterComponent />
    </>
  );
}


export default HomePage;
