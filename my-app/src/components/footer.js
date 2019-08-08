import React from 'react';
import {Container, Col, Row, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'

const FooterComponent = () => {
  return(<>
   <footer className="footer fixed-bottom">
   <Navbar sticky="bottom">
    < Container className="bg-light">
      <Row>
        <Col xs={6} md={4} className="left">
          <p>&copy; BeautyByShay.com</p>
        </Col>
        <Col xs={6} md={4} className="left">
          <a href="#">About Us</a>
        </Col>
        <Col xs={6} md={4} className="right">
          <a href="#" className="btn btn-social-icon btn-facebook">
            <span className="fa fa-facebook"></span>
          </a>
          <a href="https://www.instagram.com/beautyy_by_shay/?hl=en" className="btn btn-social-icon btn-instagram">
            <FontAwesomeIcon icon="instagram" />
            <span className="fa fa-instagram"></span>
          </a>
          <h2>{"\u2728"}</h2>
        </Col>
      </Row>
    </ Container>
    </Navbar>
  </footer>

  </>
  )
}
export default FooterComponent;
