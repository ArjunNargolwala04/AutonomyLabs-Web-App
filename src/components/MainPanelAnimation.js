// src/components/MainPanelAnimation.js
import React from 'react';
import '../styles/MainPanelAnimation.css';

const rows = 5; // Number of rows
const cols = 5; // Number of columns

const MainPanelAnimation = () => {
  const dots = Array.from({ length: rows * cols });

  return (
    <div className="animation-container">
      <svg className="connection-lines">
        {dots.map((_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const x = col * 50 + 25; // x position
          const y = row * 50 + 25; // y position

          // Connect to the right and bottom neighbors
          const connections = [];
          if (col < cols - 1) {
            connections.push(<line key={`${index}-right`} x1={x} y1={y} x2={x + 50} y2={y} />);
          }
          if (row < rows - 1) {
            connections.push(<line key={`${index}-bottom`} x1={x} y1={y} x2={x} y2={y + 50} />);
          }
          return connections;
        })}
      </svg>

      {dots.map((_, index) => (
        <div key={index} className="dot" style={{ gridRow: Math.floor(index / cols) + 1, gridColumn: (index % cols) + 1 }}></div>
      ))}
    </div>
  );
};

export default MainPanelAnimation;
