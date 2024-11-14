// src/components/CapabilitiesSection.js
import React from 'react';
import { FaBrain, FaEye, FaCode, FaLanguage } from 'react-icons/fa';
import '../styles/CapabilitiesSection.css';

const CapabilitiesSection = () => {
  return (
    <div className="capabilities-section">
      <h2 className="capabilities-title">Capabilities</h2>
      <div className="capabilities-cards">
        <div className="capability-card">
          <FaBrain className="capability-icon" />
          <h3 className="capability-title">System Assembly</h3>
          <p className="capability-description">
            Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation.
          </p>
        </div>
        <div className="capability-card">
          <FaEye className="capability-icon" />
          <h3 className="capability-title">Agent Orchestration</h3>
          <p className="capability-description">
            Transcribe and analyze almost any static image, from handwritten notes and graphs to photographs.
          </p>
        </div>
        <div className="capability-card">
          <FaCode className="capability-icon" />
          <h3 className="capability-title">Task Generation</h3>
          <p className="capability-description">
            Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases.
          </p>
        </div>
        <div className="capability-card">
          <FaLanguage className="capability-icon" />
          <h3 className="capability-title">Advanced Reasoning</h3>
          <p className="capability-description">
            Translate between various languages in real-time, practice grammar, or create multilingual content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
