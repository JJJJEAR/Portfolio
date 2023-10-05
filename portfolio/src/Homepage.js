import React from 'react';
import backgroundImage from './img/bg.jpg'; 
import Navbar from './navbar';
import './SignikaFont.css';
import './Homepage.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="page" style={{ background: `url(${backgroundImage})` }}>
        <h1>Hello, There</h1>
        <p>Welcome to my portfolio website</p>
        <p>I'm Jullajak Saksri</p>
        <p>I’m a 4 year student in the ENET-C.</p>
        <a href="/About" className="aboutButton">About Me</a>
      </div>
    </div>
  );
};

export default HomePage;