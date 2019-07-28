import react from 'react';
import {Footer, Container, Col, Row} from 'react-bootstrap'

const Footer = () => {
  return(<>
    <Footer class="footer">
          < Container fluid className="bg-primary">
            <Row>
              <Col xs={6} md={4} className="left">
                <p>&copy; MySite.com</p>
            </Col>
            <Col xs={6} md={4} className="left">
              <a href="#">Terms &amp;Conditions</a>
              <a href="#">About Us</a>
            </Col>
              <Col xs={6} md={4} className="right">
                <a href="#" class="btn btn-social-icon btn-twitter">
                <span class="fa fa-twitter"></span>
                </a>
                <a href="#" class="btn btn-social-icon btn-facebook">
                  <span class="fa fa-facebook"></span>
                </a>
                <a href="#" class="btn btn-social-icon btn-instagram">
                <span class="fa fa-instagram"></span>
                </a>
            </Col>
            </Row>
    </ Container>
        </Footer>
  </>
  )
}
export default Footer;
