import React from 'react';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Review from './Pages/Review';
import ExtraSection from './Pages/ExtraSection';
import Footer from './Pages/Footer';
import SignUp from './Pages/SignUp';
import AvailableParts from './Pages/AvailableParts';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Blogs from './Pages/Blogs';
import NotFound from './Pages/NotFound';


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
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
};

export default App;