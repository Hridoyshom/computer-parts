import React from 'react';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Review from './Pages/Review';
import Blogs from './Blogs';
import ExtraSection from './Pages/ExtraSection';
import Footer from './Pages/Footer';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
};

export default App;