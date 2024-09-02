import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'; // Import the custom CSS file

const Cart = () => {
  const { state: newCartItem } = useLocation();
  const navigate = useNavigate();
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (newCartItem) {
      const existingItemIndex = items.findIndex(item => item.id === newCartItem.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[existingItemIndex].quantity += 1;
        setItems(updatedItems);
      } else {
        setItems([...items, { ...newCartItem, quantity: 1 }]);
      }
    }
  }, [newCartItem]);

  const handleQuantityChange = (index, change) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + change);
    setItems(newItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        {items.length === 0 ? (
          <Col><h2>Your cart is empty.</h2></Col>
        ) : (
          items.map((item, index) => (
            <Col key={index} md={4}>
              <Card className="mb-4 custom-card">
                <Card.Img 
                  variant="top" 
                  src={window.location.origin + item.image_url} 
                  alt={item.title} 
                  className="custom-card-img"
                />
                <Card.Body>
                  <Card.Title className="custom-card-title">{item.title}</Card.Title>
                  <Card.Text><strong>Price:</strong> ₹{item.price.toLocaleString()}</Card.Text>
                  <Card.Text><strong>Quantity:</strong> 
                    <Button variant="outline-secondary" className="quantity-btn" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" className="quantity-btn" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                  </Card.Text>
                  <Button variant="danger" className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <div className="d-flex justify-content-end mt-4">
        <h4 className="total-price">Total Price: ₹{totalPrice.toLocaleString()}</h4>
        <Button variant="primary" className="ml-4 proceed-btn" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
