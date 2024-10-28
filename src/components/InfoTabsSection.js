// src/components/InfoTabsSection.js
import React, { useState } from 'react';
import { FaGlobe, FaChartBar, FaRobot } from 'react-icons/fa';
import '../styles/InfoTabsSection.css';

const tabData = [
  {
    title: "Enterprise",
    description: "Learn and continuously update a layered, probabilistic representation of underlying hardware logic and processes.",
    icon: <FaGlobe />,
  },
  {
    title: "Startups",
    description: "Agents that work reliably in highly complex environments. Reason with uncertainty about noisy, limited information.",
    icon: <FaChartBar />,
  },
  {
    title: "Research",
    description: "Digital robots observe workflows naturally, understand live intent, and improve high-value decisions across the organization.",
    icon: <FaRobot />,
  },
];

function InfoTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="info-tabs-section">
        <h2>Solutions</h2>
      <div className="tabs">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div className="content-left">
          <h3>{tabData[activeTab].title}</h3>
          <p>{tabData[activeTab].description}</p>
        </div>
        <div className="content-right">
          <div className="icon">{tabData[activeTab].icon}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoTabsSection;
