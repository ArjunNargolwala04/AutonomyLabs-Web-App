// src/components/WorkSection.js

import React from 'react';
import '../styles/WorkSection.css'; // Corrected path

const workItems = [
  {
    category: 'Enterprise',
    title: 'Claude for Enterprise',
    description: 'An enterprise-grade AI assistant designed for business needs.',
    date: 'Sep 4, 2024',
  },
  {
    category: 'Startup',
    title: 'Constitutional AI: Harmlessness from AI Feedback',
    description: 'Exploring safe and aligned AI through feedback and constitutional principles.',
    date: 'Dec 15, 2022',
  },
  {
    category: 'Research',
    title: 'Core Views on AI Safety: When, Why, What, and How',
    description: 'Guidelines and principles for safe and ethical AI development.',
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
