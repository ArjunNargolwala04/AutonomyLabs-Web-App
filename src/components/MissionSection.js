// src/components/MissionSection.js
import React from 'react';
import '../styles/MissionSection.css';
import { FaArrowRight } from 'react-icons/fa';

function MissionSection() {
  return (
    <div className="mission-section">
      <div className="mission-left">
        <h2>Our Mission</h2>
      </div>
      <div className="mission-right">
        <h3>Transforming industry capabilities with advanced technology.</h3>
        <p>
          In a rapidly evolving landscape, staying ahead requires innovation and adaptability. 
          Our mission is to bring state-of-the-art AI technology to automate and enhance core 
          capabilities in various sectors, from finance to manufacturing.
        </p>
        <a href="/mission" className="mission-link">
          Learn more about our mission <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  );
}

export default MissionSection;
