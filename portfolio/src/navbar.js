import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; // Import the menu icon from React Icons

const Navbar = () => {
  // Define a state variable to track the menu's open/closed state
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
    alignItems: 'center', // Center vertically
  };

  const leftContentStyle = {
    display: 'flex',
    alignItems: 'center', // Center vertically
  };

  const rightContentStyle = {
    display: 'flex',
    alignItems: 'center', // Center vertically
  };

  const iconStyle = {
    fontSize: '24px', // Adjust the size of the icon
    marginRight: '10px', // Add spacing between the icon and text
    cursor: 'pointer', // Add a pointer cursor to indicate interactivity
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px', // Adjust the spacing from the icon
    color: '#fff',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 20px',
  };

  // Function to toggle the menu open/closed state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle the button click
  const handleButtonClick = () => {
    // Add your desired functionality here
    alert('Button clicked!'); // For example, show an alert
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