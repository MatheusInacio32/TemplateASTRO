import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Services from './pages/Services/Services'; 
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;