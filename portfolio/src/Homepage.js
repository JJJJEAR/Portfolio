import React from 'react';
import backgroundImage from './img/bg.jpg'; 
import Navbar from './navbar';

const HomePage = () => {
  const pageStyle = {
    background: `url(${backgroundImage})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    textAlign: 'center',
  };

  const portfolioLinkStyle = {
    color: '#00aaff',
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: 'color 0.3s', // Add a smooth color transition on hover
  };

  return (
    <div>
    <Navbar/>
    <div style={pageStyle}>
    
      <h1>Hello ,</h1>
      <p>Welcome to my portfolio website</p>
      <p>
        I'm Jullajak Saksri    
      </p>
       <p>
        I’m a 4 year student in the ENET-C .
        </p>

      <button style={portfolioLinkStyle}>About Me</button>
    </div>
    </div>
  );
};

export default HomePage;