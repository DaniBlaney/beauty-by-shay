import React from 'react';
import { Nav, NavDropdown, NavItem, Navbar, NavbarBrand, NavLink, Container } from 'react-bootstrap';

const NavBarComponent = () => {
  return (<>
    <Container fluid>
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="#">Beauty By Shay</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  </>
  )
}


export default NavBarComponent;
