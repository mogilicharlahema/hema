import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
  const { state: property } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  if (!property) {
    return <div className="container mt-5"><h2>No property details available.</h2></div>;
  }

  const { title, price, image_url } = property;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would handle form submission here and update the cart or database
    navigate('/cart', { state: { ...property, quantity: 1 } }); // Assuming 1 item per booking
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
              <Card.Text><strong>Price:</strong> ₹{price.toLocaleString()}</Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your phone number" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3}
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Book Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
