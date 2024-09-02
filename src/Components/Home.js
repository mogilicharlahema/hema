import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Dropdown, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from "./Data";

const Home = () => {
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log("Search clicked!");
  };

  const sortProperties = (properties) => {
    return properties.filter(property => {
      return (
        (bedrooms ? property.bedrooms === parseInt(bedrooms) : true) &&
        (location ? property.location?.includes(location) : true) &&
        (priceRange ? property.price <= parseInt(priceRange) : true)
      );
    });
  };

  return (
    <div className="container mt-5">
      <div className="welcome-message mb-4" style={{ textAlign: "center" }}>
        <h2>Welcome back! Let’s continue your search.</h2>
      </div>

      <div 
  className="search-bar mb-4 p-3" 
  style={{
    border: "1px solid #ddd", 
    borderRadius: "5px", 
    padding: "20px", 
    backgroundColor: "#f8f9fa"
  }}
>
  <Row className="g-3">
    <Col xs={12} md={3}>
      <Dropdown onSelect={(eventKey) => setBedrooms(eventKey)}>
        <Dropdown.Toggle variant="light" id="dropdown-bedrooms">
          {bedrooms ? `${bedrooms} Bedrooms` : "Bedrooms"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="">All Bedrooms</Dropdown.Item>
          <Dropdown.Item eventKey="3">3 Bedrooms</Dropdown.Item>
          <Dropdown.Item eventKey="4">4 Bedrooms</Dropdown.Item>
          <Dropdown.Item eventKey="5">5 Bedrooms</Dropdown.Item>
          <Dropdown.Item eventKey="6">6 Bedrooms</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={12} md={3}>
      <Dropdown onSelect={(eventKey) => setLocation(eventKey)}>
        <Dropdown.Toggle variant="light" id="dropdown-location">
          {location ? location : "Location"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="">All Locations</Dropdown.Item>
          <Dropdown.Item eventKey="Hyderabad">Hyderabad</Dropdown.Item>
          <Dropdown.Item eventKey="Mumbai">Mumbai</Dropdown.Item>
          <Dropdown.Item eventKey="Delhi">Delhi</Dropdown.Item>
          <Dropdown.Item eventKey="Bangalore">Bangalore</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={12} md={3}>
      <Dropdown onSelect={(eventKey) => setPriceRange(eventKey)}>
        <Dropdown.Toggle variant="light" id="dropdown-price">
          {priceRange ? `₹${priceRange} and below` : "Price Range"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="">All Price Ranges</Dropdown.Item>
          <Dropdown.Item eventKey="5000000">₹50 Lakh and below</Dropdown.Item>
          <Dropdown.Item eventKey="10000000">₹1 Crore and below</Dropdown.Item>
          <Dropdown.Item eventKey="20000000">₹2 Crore and below</Dropdown.Item>
          <Dropdown.Item eventKey="30000000">₹3 Crore and below</Dropdown.Item>
          <Dropdown.Item eventKey="40000000">₹4 Crore and below</Dropdown.Item>
          <Dropdown.Item eventKey="50000000">₹5 Crore and below</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
      <Button variant="danger" onClick={handleSearch} className="w-100">
        Search
      </Button>
    </Col>
  </Row>
</div>


      <Row>
        {sortProperties(Data).map((property) => (
          <Col key={property.id} lg={4} md={6} sm={12} className="mb-4">
            <Card className="h-100">
              <Link to={`/property/${property.id}`} state={property}>
                <Card.Img
                  variant="top"
                  src={property.image_url}
                  alt={property.title}
                  style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text>{property.location}</Card.Text>
                <Card.Text><strong>Price:</strong> ₹{property.price.toLocaleString()}</Card.Text>
                <Link to={`/property/${property.id}`} state={property} className="btn btn-primary mt-auto">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
