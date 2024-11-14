import React from 'react';
import '../styles/Research.css';
import { FaSearch, FaBalanceScale, FaBrain } from 'react-icons/fa';
import BackgroundImage from '../assets/deepmind.jpg';

const Research = () => {
  return (
    <div className="research-page">
      {/* Hero Section */}
      <div
        className="research-hero-section"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="research-hero-overlay">
          <h1>Autonomous Systems Research</h1>
          <p>Pushing the boundaries of complex-adaptive-systems for human good. </p>
        </div>
      </div>

      {/* Research Teams Section */}
      <section className="research-teams-section">
        <h2>Research Areas</h2>
        <div className="team-cards">
          <div className="team-card">
            <h3>Multi-Agent Systems</h3>
            <p>
            Exploring frameworks for autonomous agents to collaboratively solve complex problems,
              enhance decision-making, and adapt to dynamic environments.
            </p>
          </div>
          <div className="team-card">
            <h3>Vision-Language Models</h3>
            <p>
            Advancing AI capabilities in understanding and generating human language paired with visual inputs
              to enable nuanced, context-aware interactions.
            </p>
          </div>
          <div className="team-card">
            <h3>Complex-Adaptive Systems</h3>
            <p>
            Investigating the interactions within adaptive, complex systems to model and influence
              behavior in environments that require resilience, adaptability, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Research Section */}
      <section className="selected-research-section">
        <h2 className="selected-research-title">Selected Research Inspiration</h2>
        <div className="research-cards">
          <div className="research-card">
            <FaBrain size={40} />
            <h4>Multi-Agent Collaboration: Intelligent LLM Agents</h4>
            <p>Featured paper</p>
          </div>
          <div className="research-card">
            <FaBalanceScale size={40} />
            <h4>Automating the Enterprise with Foundation Models</h4>
            <p>Featured paper</p>
          </div>
          <div className="research-card">
            <FaSearch size={40} />
            <h4>Exploring the Frontier of Vision-Language Models</h4>
            <p>Featured paper</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
