// src/components/Main.js
import React from 'react';
import NetworkGraph from './NetworkGraph';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="main-panel">
      <div className="main-text">
        <p className="main-title">Self-Assembling Intelligence</p>
        <p className="main-subtitle"> _Build the future.</p>
      </div>
      <div className="main-animation">
        <NetworkGraph />
      </div>
    </div>
  );
};

export default Main;
