import React from 'react';
import '../styles/Company.css';
import backgroundImage from '../assets/deepmind5.jpg'; // Update with the actual path to your hero image

const Company = () => {
  return (
    <div className="company-page">
      {/* Hero Section */}
      <div
        className="company-hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="company-hero-overlay">
          <h1>Redefining Autonomous Intelligence</h1>
          <p>Building the infrastructure for the next generation of intelligent systems.</p>
        </div>
      </div>

      {/* About Section */}
      <section className="company-about-section">
        <h2>About Us</h2>
        <p>
          At Autonomy Labs, we aim to push the boundaries of artificial intelligence by creating intelligent systems that can autonomously analyze, understand, and solve complex challenges. Our mission is to redefine what’s possible in the world of AI by crafting scalable solutions that power the backbone of various industries.
        </p>
        <p>
          Through rigorous research and continuous improvement, we are committed to developing AI systems that integrate seamlessly with real-world applications, offering unparalleled efficiency, accuracy, and insight. Our vision is to create a future where autonomous intelligence empowers people, drives innovation, and reshapes industries.
        </p>
        <p>
          Founded by visionaries with deep expertise in AI, machine learning, and engineering, Autonomy Labs brings together a team of passionate experts dedicated to advancing the capabilities of autonomous systems. We believe that intelligent systems should enhance human potential, not replace it. With this belief, we are focused on making AI more accessible, adaptable, and impactful for everyone.
        </p>
      </section>

      {/* Careers Section */}
      <section className="company-careers-section">
        <h2>Careers</h2>
        <p>
          Interested in joining us on this journey? We are always looking for talented individuals
          who share our vision and are passionate about advancing the field of AI. Schedule a
          meeting with us to learn more about potential opportunities and how you can contribute.
        </p>
        <a
          href="https://calendly.com/arjunvnargolwala/autonomy-labs-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="calendly-link"
        >
          Schedule a Meeting
        </a>
      </section>
    </div>
  );
};

export default Company;
