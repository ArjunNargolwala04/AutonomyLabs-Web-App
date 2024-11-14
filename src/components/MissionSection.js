// src/components/MissionSection.js
import React from 'react';
import '../styles/MissionSection.css';
import { FaArrowRight } from 'react-icons/fa';

function MissionSection() {
  return (
    <div className="main-mission-section">
      <div className="mission-right">
        <h3>Automate Everything. Empower Everyone.</h3>
        <p>
          Our mission is to build autonomous systems that enable organizations to scale, 
          adapt, and innovate at unprecedented speeds. 
          We are transforming core business operations through advanced multi-agent AI that learns, optimizes, and evolves in real time. From finance and logistics to manufacturing and beyond, our goal is to turn ambitious visions into reality by empowering businesses to automate workflows, reduce complexity, and unlock new possibilities across every sector.
        </p>
        <a href="/company" className="mission-link">
          Learn more about our mission <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  );
}

export default MissionSection;
