import React from 'react';
import { Nav, NavDropdown, NavItem, Navbar, NavbarBrand, NavLink, Container, Button } from 'react-bootstrap';

const NavBarComponent = () => {
  return (<>
    <Container fluid>
      <Navbar className="navbar" id="custom-nav" sticky="top" bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./images/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Beauty By Shay'}
        </Navbar.Brand>
        <Nav className="justify-content-right">
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  </>
  )
}


export default NavBarComponent;
