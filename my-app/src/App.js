import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import React, { useState } from 'react';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Home from './components/home.jsx';
import ReporterRegister from './components/ReporterRegister.js';
import UserRegister from './components/UserRegister.js';
import PostPage from './components/PostPage.jsx';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ReporterRegister' element={<ReporterRegister />} />
        <Route path='/UserRegister' element={<UserRegister />} />
        <Route path='/post' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
