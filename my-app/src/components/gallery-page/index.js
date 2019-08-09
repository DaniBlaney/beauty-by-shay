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
        <Row>
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
        <Row>
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
        <Row>
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
        <Row>
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

      </Container>
      <FooterComponent />
    </>
  );
}
export default Gallery;
