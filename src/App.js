// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Home will include Main internally
import Research from './pages/Research';
import ProductsPage from './pages/ProductsPage';
import Safety from './pages/Safety';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Only show Main within Home on the root route */}
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

