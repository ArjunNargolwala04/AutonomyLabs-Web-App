// src/components/Main.js
import React from 'react';
import NetworkGraph from './NetworkGraph';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="main-panel">
      <div className="main-content">
        <h1>Self-Assembling Intelligence</h1>
        <p>Multi-Agent AI Systems</p>
      </div>
      <NetworkGraph />
    </div>
  );
};

export default Main;
