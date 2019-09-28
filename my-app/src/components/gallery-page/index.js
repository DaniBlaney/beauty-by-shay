import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';


const Gallery = () => {
  return (
    <>
      <NavBarComponent />
      <Container>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/color1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/color2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/color3.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/color4.jpg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/roots1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/roots2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/roots3.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/roots4.jpg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/correction1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/correction2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/correction4.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/correction3.jpg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/highlight1.jpeg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/highlight2.jpeg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/highlight3.jpeg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/highlight4.jpeg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/long1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/long2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/long3.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/long4.jpg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun3.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun4.jpg" rounded />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun1.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun2.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun3.jpg" rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image className="imageSize" src="./images/bun4.jpg" rounded />
          </Col>
        </Row>

      </Container>
      <FooterComponent />
    </>
  );
}
export default Gallery;
