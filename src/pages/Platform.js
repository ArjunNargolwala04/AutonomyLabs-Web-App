import React from 'react';
import '../styles/Platform.css';
import BackgroundImage from '../assets/deepmind2.jpg'; // Replace 'your-image.jpg' with the actual image name


const Platform = () => {
  return (
    <div className="research-page">
      {/* Mission Statement Section */}
      <div
        className="mission-section"
        style={{
          backgroundImage: `url(${BackgroundImage})`, // Use the imported image here
        }}
      >
        <div className="mission-overlay">
          <h1>Construct & Orchestrate Multi-Agent Systems</h1>
          <p>Start new companies, workflows, research papers, all with a few simple lines.</p>
        </div>
      </div>

      {/* First Section - Controllable Cognitive Architecture */}
      <div className="cognitive-architecture-section">
        <div className="architecture-content">
          <div className="architecture-diagram">
            {/* Simple placeholder for diagram */}
            <div className="diagram-placeholder">Diagram Placeholder</div>
          </div>
          <div className="architecture-description">
            <h2>Controllable Cognitive Architecture</h2>
            <p>LangGraph’s flexible API supports diverse control flows – single agent, multi-agent, hierarchical, sequential – and robustly handles realistic, complex scenarios.</p>
            <p>Ensure reliability with easy-to-add moderation and quality loops that prevent agents from veering off course.</p>
            <a href="#docs" className="docs-link">See the docs ↗</a>
          </div>
        </div>
      </div>

      {/* Second Section - Controllable Cognitive Architecture */}
      <div className="cognitive-architecture-section">
        <div className="architecture-content">
        <div className="architecture-description">
            <h2>Controllable Cognitive Architecture</h2>
            <p>LangGraph’s flexible API supports diverse control flows – single agent, multi-agent, hierarchical, sequential – and robustly handles realistic, complex scenarios.</p>
            <p>Ensure reliability with easy-to-add moderation and quality loops that prevent agents from veering off course.</p>
            <a href="#docs" className="docs-link">See the docs ↗</a>
          </div>
          <div className="architecture-diagram">
            {/* Simple placeholder for diagram */}
            <div className="diagram-placeholder">Diagram Placeholder</div>
          </div>
        </div>
      </div>

      {/* Third Section - Controllable Cognitive Architecture */}
      <div className="cognitive-architecture-section">
        <div className="architecture-content">
          <div className="architecture-diagram">
            {/* Simple placeholder for diagram */}
            <div className="diagram-placeholder">Diagram Placeholder</div>
          </div>
          <div className="architecture-description">
            <h2>Controllable Cognitive Architecture</h2>
            <p>LangGraph’s flexible API supports diverse control flows – single agent, multi-agent, hierarchical, sequential – and robustly handles realistic, complex scenarios.</p>
            <p>Ensure reliability with easy-to-add moderation and quality loops that prevent agents from veering off course.</p>
            <a href="#docs" className="docs-link">See the docs ↗</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Platform;

