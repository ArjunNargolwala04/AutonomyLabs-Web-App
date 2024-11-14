  // src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Adjust path if necessary

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <Link to="/" className="title">AUTONOMY LABS</Link>
        </div>
        <nav className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/research">Research</Link>
        <Link to="/company">Company</Link>
        {/* Contact Button */}
        <a
          href="https://calendly.com/arjunvnargolwala/autonomy-labs-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Contact
        </a>
      </nav>
        </div>
    </header>
  );

  
}

export default Header;

