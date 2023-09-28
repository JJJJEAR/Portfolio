import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
  };

  const leftContentStyle = {
    display: 'flex',
    alignItems: 'center', 
  };

  const rightContentStyle = {
    display: 'flex',
    alignItems: 'center', 
  };

  const iconStyle = {
    fontSize: '24px', 
    marginRight: '10px', 
    cursor: 'pointer', 
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px', 
    color: '#fff',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 20px',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {

    alert('Button clicked!'); 
  };

  return (
    <nav style={navbarStyle}>
      <div style={leftContentStyle}>
        <HiMenu icon="icon-name" style={iconStyle} onClick={toggleMenu} />
        <span>Menu</span>
      </div>
      <div style={rightContentStyle}>
        {isMenuOpen && (
          <button style={buttonStyle} onClick={handleButtonClick}>
            
          </button>
        )}
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/portfolio" style={linkStyle}>
          Portfolio
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;