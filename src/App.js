// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import ProductsPage from './pages/ProductsPage';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

