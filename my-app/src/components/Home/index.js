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
            <Card style={{ width: '20rem' }}>
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
            <Card  style={{ width: '20rem' }}>
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
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/shayy.png" />
              <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text>
                  Check out some of the work I have done!
            </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr/>
      <Container fluid>
        <Row>
          <Col md={6}>
          <Card.Img src="./images/fringe.png" />
          </Col>
          <Col md={6}>
          <Card >
            <Card.Header>Certifications</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  {"\u2728"} La Bella Hair Extension Certified |
                  {"\u2728"} Certified in Cut it Out
                  {' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
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
