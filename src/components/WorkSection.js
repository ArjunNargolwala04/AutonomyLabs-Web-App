// src/components/WorkSection.js

import React from 'react';
import '../styles/WorkSection.css'; // Corrected path

const workItems = [
  {
    category: 'Enterprise',
    title: 'Autonmous Workflows',
    description: 'Transform your operations with our enterprise AI assistant that autonomously manages cross-functional workflows, enabling seamless scaling through deep integrations and intelligent automation.',
    date: 'Sep 4, 2024',
  },
  {
    category: 'Startups',
    title: 'Launch with AI',
    description: 'Accelerate your growth with our responsible AI deployment framework, combining advanced capabilities with ethical principles to help you scale faster while staying true to your values.',
    date: 'Dec 15, 2022',
  },
  {
    category: 'Research',
    title: 'Multi-Agent Systems',
    description: 'Leading the development of safe and scalable multi-agent AI systems through pioneering research that establishes new standards for collaborative, ethical, and human-aligned artificial intelligence.',
    date: 'Mar 8, 2023',
  },
];

const WorkSection = () => {
  return (
    <div className="work-section-container">
      <h2 className="work-section-title">Our Work</h2>

      <div className="work-cards-container">
        {workItems.map((item, index) => (
          <div key={index} className="work-card">
            <p className="work-card-category">{item.category}</p>
            <h3 className="work-card-title">{item.title}</h3>
            <p className="work-card-description">{item.description}</p>
            <p className="work-card-date">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
