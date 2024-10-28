// src/components/FeatureSection.js
import React from 'react';
import '../styles/FeatureSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faCloud } from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-heading">Secure and Enterprise-ready</h2>
      <p className="feature-subheading">
        Meet security and operational requirements to bring AI products to market faster.
      </p>
      <div className="feature-container">
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faLock} size="2x" />
          </div>
          <h3>Secure</h3>
          <p>Control your data and know it’s safe. SOC 2 and HIPAA certified.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          </div>
          <h3>Reliable</h3>
          <p>Powering mission-critical applications of all sizes, with support SLAs and observability.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faCloud} size="2x" />
          </div>
          <h3>Cloud-native</h3>
          <p>Fully managed in the cloud of your choice. Available via AWS, Azure, GCP.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
