import React from 'react';
import '../styles/ProductsPage.css';
import backgroundImage from '../assets/deepmind3.png'; // Importing the image directly
import { FaRobot, FaNetworkWired} from 'react-icons/fa';
import { SiDatabricks } from 'react-icons/si';

const ProductsPage = () => {
  return (
    <div className="products-page">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image here
        }}
      >
        <div className="hero-overlay">
          <h1>Build an Entire System with a Single Prompt</h1>
          <p>Start new companies, workflows, research papers, all with a few simple lines.</p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-cards">
        <div className="product-card">
          <div className="product-icon">
            <FaRobot size={50} />
          </div>
          <div className="product-description">
            <h2>Autonomous Workflow Automation</h2>
            <p>Our AI-driven platform automates complex workflows across industries, enabling businesses to enhance productivity and streamline operations without human intervention.</p>
            <p>Seamlessly integrates with existing infrastructures to adapt to dynamic tasks, providing autonomous task management and decision-making at scale.</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-icon">
            <SiDatabricks size={50} />
          </div>
          <div className="product-description">
            <h2>Intelligent Data Insights</h2>
            <p>Utilize advanced machine learning models to analyze and gain insights from large volumes of data, driving better decision-making and identifying key opportunities.</p>
            <p>With real-time analytics and predictive modeling, Autonomy Labs empowers organizations to stay ahead of the curve with data-informed strategies.</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-icon">
            <FaNetworkWired size={50} />
          </div>
          <div className="product-description">
            <h2>Scalable Multi-Agent Systems</h2>
            <p>Our platform supports the orchestration of multi-agent systems, allowing multiple AI agents to collaborate and tackle complex challenges autonomously.</p>
            <p>This scalable approach enables businesses to handle intricate scenarios, from financial modeling to logistics optimization, with high efficiency and adaptability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
