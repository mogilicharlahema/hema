import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="g-4">
          {/* About Us */}
          <Col xs={12} md={4}>
            <h5>About Us</h5>
            <p>
              We are dedicated to helping you find your dream property. Whether you are buying, selling, or renting, our team is here to assist you every step of the way.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item action href="/about" className="bg-dark text-light">
                About Us
              </ListGroup.Item>
              <ListGroup.Item action href="/contact" className="bg-dark text-light">
                Contact Us
              </ListGroup.Item>
              <ListGroup.Item action href="/properties" className="bg-dark text-light">
                Properties
              </ListGroup.Item>
              <ListGroup.Item action href="/services" className="bg-dark text-light">
                Services
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={4}>
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <div className="d-flex gap-2">
              <Button variant="outline-light" href="https://facebook.com" target="_blank">Facebook</Button>
              <Button variant="outline-light" href="https://twitter.com" target="_blank">Twitter</Button>
              <Button variant="outline-light" href="https://instagram.com" target="_blank">Instagram</Button>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} My Bookings. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
