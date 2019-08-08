import React from 'react';
import { Container, Col, Row, Navbar, Nav, Link, Item } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'

const FooterComponent = () => {
  return (<>
    <footer className="footer fixed-bottom">
      <Navbar sticky="bottom">
        < Container fluid className="bg-light">
          <Nav.Item>
            <a>&copy; BeautyByShay 2019 {"\u2728"}</a>
          </Nav.Item>
          <Nav.Link>
            <a href="#" className="btn btn-social-icon btn-facebook">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="https://www.instagram.com/beautyy_by_shay/?hl=en" className="btn btn-social-icon btn-instagram">
              <FontAwesomeIcon icon="instagram" />
              <span className="fa fa-instagram"></span>
            </a>
          </Nav.Link>
        </ Container>
      </Navbar>
    </footer>

  </>
  )
}
export default FooterComponent;
