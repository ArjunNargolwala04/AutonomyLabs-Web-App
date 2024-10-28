// src/components/NetworkGraph.js
import React, { useEffect, useRef } from 'react';
import '../styles/NetworkGraph.css';

const nodeCount = 30;
const connectDistance = 120;

const NetworkGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    }));

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections(context, nodes);
      updateNodes(nodes, canvas);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const updateNodes = (nodes, canvas) => {
    nodes.forEach((node) => {
      node.x += node.dx;
      node.y += node.dy;

      if (node.x <= 0 || node.x >= canvas.width) node.dx *= -1;
      if (node.y <= 0 || node.y >= canvas.height) node.dy *= -1;
    });
  };

  const drawConnections = (context, nodes) => {
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode) => {
        const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
        if (distance < connectDistance) {
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(otherNode.x, otherNode.y);
          context.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectDistance})`;
          context.lineWidth = 0.5;
          context.stroke();
        }
      });
    });

    nodes.forEach((node) => {
      context.beginPath();
      context.arc(node.x, node.y, 3, 0, Math.PI * 2);
      context.fillStyle = '#ffffff';
      context.fill();
    });
  };

  return <canvas ref={canvasRef} width={800} height={600} className="network-graph" />;
};

export default NetworkGraph;
