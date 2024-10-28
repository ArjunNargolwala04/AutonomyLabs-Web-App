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
          <Link to="/" className="title">Autonomy Labs</Link>
        </div>
        <nav className="nav-links">
          <Link to="/research">Research</Link>
          <Link to="/products">Products</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/company">Company</Link>
        </nav>
        <div className="schedule-meeting">
          <button>Schedule a Meeting</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
