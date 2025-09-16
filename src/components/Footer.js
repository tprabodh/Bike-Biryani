
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ef6800', color: 'white' }}>
      <Container>
        <Row className="py-3">
          <Col md={4} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Bike Biryani | By Oxysmart private limited</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/contact" className="text-white no-underline">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-white no-underline">Terms & Conditions</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
