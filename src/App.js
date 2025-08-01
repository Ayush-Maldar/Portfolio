// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import S from './components/Services ';
import A from './components/About'
import Skill from './components/Skill';
import PortfolioPage from './components/Project';
import ResumePage from './components/ResumePage';
import { Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/about" element={<A/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
         <Route path='/skill' element={<Skill/>}/>
        <Route path='/services' element={<S/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </div>
  
  );
}

export default App;