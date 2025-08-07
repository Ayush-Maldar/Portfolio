// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1>Hello I am Ayush Maldar</h1>
        <h2>I'm a Software Developer</h2>
        <p>I build modern web applications ,Mobile Apps and Websites and know  some Programming Languages </p>
        <div className="buttons">
          <button className="hire-me" onClick={()=>{window.location.href="mailto:ayush.maldar.10@gmail.com?subject=Hire%20Me&body=Hi,%20I%20would%20like%20to%20hire%20you%20for"}}>Hire Me</button>
          <br/>
          <br/>
          <a href={`${process.env.PUBLIC_URL}/pdf/Ayushcv.pdf`} download className='download-cv'>Download CV</a>
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + "/images/profile.jpg"} className="profile-image"/>
    </section>
  );
};

export default HeroSection;