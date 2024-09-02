import React from "react";
import image from "./wall.jpg";

const Top = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Exclusive NoBroker Builder Support Plan</h2>

      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
            src={image}
            alt="Buildings for Rent and Sale"
            style={styles.image}
          />
        </div>
        <div style={styles.info}>
          <p>Reach out to us for Selling or Leasing Your Properties</p>
          <button style={styles.button}>Contact Us</button>
          <p style={styles.contactInfo}>Builder Assistance: +91 94946 97152</p>

        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    marginTop: "60px", // Adjusted to add space below the fixed navbar
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  header: {
    color: "#557",
    marginBottom: "20px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    width: "200px", // Adjust size as needed
  },
  image: {
    width: "100%",
    height: "100%"
  },
  info: {
    maxWidth: "300px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#e44b4b",
  },
  contactInfo: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#888",
  },
};

export default Top;
