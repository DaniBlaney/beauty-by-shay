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
        <h1>Coming Soon!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button href="/" variant="primary">Return Home</Button>
        </p>
      </Jumbotron>
      <FooterComponent />
    </>
  );
}
export default Contact;
