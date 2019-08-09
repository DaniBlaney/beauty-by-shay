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
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <hr></hr>
                  {"\u2728"} La Bella Hair Extension Certified |
                  {"\u2728"} Certified in Cut it Out
            </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card  style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/hairheart.png" />
              <Card.Body>
                <Card.Title>Why I love my job</Card.Title>
                <Card.Text className="h-100">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
            </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/wavy.png" />
              <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text className="h-100">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
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
