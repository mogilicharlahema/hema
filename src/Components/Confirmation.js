import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const { state: formData } = useLocation();

  return (
    <div className="container mt-5">
      <h2>Thank You for Your Booking, {formData.name}!</h2>
      <p>We have received your booking details.</p>
      <p>You will receive a confirmation email at {formData.email} shortly.</p>
    </div>
  );
};

export default Confirmation;
