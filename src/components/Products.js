// src/components/Products.js
import React from 'react';
import '../styles/Products.css'; // Corrected path

const Products = () => (
  <section className="products-section">
    <h2>Our Products</h2>
    <p>Explore our AI-native applications optimized for financial services.</p>
    <div className="product-flow">
      <div className="product-step">
        <p>Data Source</p>
      </div>
      <div className="arrow">→</div>
      <div className="product-step">
        <p>Embedding Model</p>
      </div>
      <div className="arrow">→</div>
      <div className="product-step">
        <p>Vector Database</p>
      </div>
      <div className="arrow">→</div>
      <div className="product-step">
        <p>Search Application</p>
      </div>
    </div>
  </section>
);

export default Products;
