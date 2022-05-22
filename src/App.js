import React from 'react';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;