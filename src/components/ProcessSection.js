// src/components/ProcessSection.js

import React from 'react';
import '../styles/ProcessSection.css';

const ProcessSection = () => {
  return (
    <div className="process-section-container">
      <h2 className="process-section-title">Search, Generate, Fine Tune</h2>
      <div className="process-section-steps">
        <div className="process-step">
          <div className="process-icon data-source-icon"></div>
          <p className="step-title">Data source</p>
        </div>
        <div className="process-arrow">→</div>
        <div className="process-step">
          <div className="process-icon embedding-model-icon"></div>
          <p className="step-title">Embedding model</p>
        </div>
        <div className="process-arrow">→</div>
        <div className="process-step">
          <div className="process-icon vector-db-icon"></div>
          <p className="step-title">Pinecone Vector Database</p>
        </div>
        <div className="process-arrow">→</div>
        <div className="process-step">
          <div className="process-icon search-app-icon"></div>
          <p className="step-title">Search application</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
