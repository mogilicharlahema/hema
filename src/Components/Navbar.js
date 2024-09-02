import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Booking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Properties
            </Nav.Link>
            <Nav.Link as={Link} to="/" color="white">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
