// src/App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import S from './components/Services ';
import A from './components/About'
import Skill from './components/Skill';
import PortfolioPage from './components/Project';
import ResumePage from './components/ResumePage';

function App() {
  return (
  <Router> 
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/about" element={<A/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
         <Route path='/skill' element={<Skill/>}/>
        <Route path='/services' element={<S/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path="*" element={<HeroSection/>}/>
      </Routes>
    </div>
  </Router> 
  );
}

export default App;