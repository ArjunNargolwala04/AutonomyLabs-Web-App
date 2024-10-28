// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Corrected path

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Autonomy Labs. All rights reserved.</p>
    <div className="footer-links">
      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a>
    </div>
  </footer>
);

export default Footer;
