import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Col, Row, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Property = () => {
  const { state: property } = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  if (!property) {
    return <div className="container mt-5"><h2>No property details available.</h2></div>;
  }

  const { title, description, price, location, bedrooms, image_url } = property;

  const handleBookNow = () => {
    navigate('/booking', { state: property });
  };

  const handleContactOwner = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Img 
              variant="top" 
              src={window.location.origin + image_url} 
              alt={title} 
              style={{ objectFit: 'cover', height: '300px', width: '100%' }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text><strong>Location:</strong> {location}</Card.Text>
              <Card.Text><strong>Bedrooms:</strong> {bedrooms}</Card.Text>
              <Card.Text><strong>Price:</strong> ₹{price.toLocaleString()}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="warning" onClick={handleContactOwner}>Contact Owner</Button>
                <Button variant="info" onClick={handleBookNow}>Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Owner Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title><bold>Contact Owner</bold></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="dark" onClick={handleCloseModal}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Property;
