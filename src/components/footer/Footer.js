import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <h1>-MFC-</h1>
        <small>Email: ABC@gmail.com</small>
        <small>CAll US: +012345678910</small>
      </div>
      <div className="footer-text">
        <h1>Talk to us</h1>
        <a href="#">About Us</a>
        <a href="#">Registration</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-text">
        <h1>Support</h1>
        <a href="3">Documentation</a>
        <a href="#">FAQs</a>
        <a href="#">Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
