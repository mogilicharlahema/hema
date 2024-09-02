import React, {  } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Property from './Components/Property';
import Cart from './Components/Cart';
import Booking from './Components/Booking';
import Login from './Components/Login';
import Banner from './Components/Banner';
import NavbarComponent from "./Components/Navbar"
import Checkout from './Components/Checkout';
import Confirmation from './Components/Confirmation';
import Top from './Components/Top';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation();
 

  return (
    <>
    <NavbarComponent/>
      {location.pathname === "/" && <Top/>}
      
      {location.pathname === '/' && <Banner />}
     
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
        <Footer/>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
