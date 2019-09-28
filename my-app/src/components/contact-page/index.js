import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Body, Title, Text, Nav, Navbar, Dropdown, ButtonGroup, NavItem, Link, Brand, Button, FormControl, Form, Image, Container, Jumbotron } from 'react-bootstrap';
import NavBarComponent from "../navbar";
import FooterComponent from '../footer';


const Contact = () => {
  return (
    <>
      <NavBarComponent />
      <Jumbotron align="center">
        <h1>Make your appointment today!</h1>
        <p>
          If you have any questions do not hesitate to ask! You can come schedule an appointment with me at Fringe by calling (973)-762-7222
          or you can visit my Instagram @Beautyy_by_shay and message me about Prom hair and Makeup and other services I travel for!
        </p>
        <p>
          <Button href="/" variant="primary">Return Home</Button>
        </p>
      </Jumbotron>
      <Row className="justify-content-md-center">
        <Col md={4}>
         <a href="https://www.google.com/maps/place/The+Fringe+Salon/@40.7211002,-74.2726686,16.09z/data=!4m5!3m4!1s0x89c3ac541a49bffd:0xd49c3e79e60df400!8m2!3d40.7208975!4d-74.2697494"> <Card.Img className="cardStyle imgStyle" src="./images/fringesearch.png" /></a>
        </Col>
        <Col md={8}>
        <a href="https://www.google.com/maps/place/The+Fringe+Salon/@40.7211002,-74.2726686,16.09z/data=!4m5!3m4!1s0x89c3ac541a49bffd:0xd49c3e79e60df400!8m2!3d40.7208975!4d-74.2697494"> <Card.Img className="cardStyle imgStyle" src="./images/fringemap.png" /></a>
        </Col>
      </Row>
      <FooterComponent />
    </>
  );
}
export default Contact;
