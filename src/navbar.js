import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarStyle = {
    //backgroundColor: '#000046',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '25px',
    color: 'white',
    position: 'fixed',
    top: '7%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    marginHorizontal: '50px',
    width: '60%',
    // backgroundColor: 'transparent',
    // color: '#fff',
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // right: '0',
    // padding: '20px',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center', 
  };

  // const leftContentStyle = {
  //   display: 'flex',
  //   alignItems: 'center', 
  // };

  // const rightContentStyle = {
  //   display: 'flex',
  //   alignItems: 'center', 
  // };

  const iconStyle = {
    fontSize: '20px', 
    marginLeft: '20px',
    marginRight: '20px', 
    cursor: 'pointer', 
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '50px',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <HiMenu icon="icon-name" style={iconStyle} onClick={toggleMenu} />
        <span style={{cursor: 'pointer'}}></span>
      
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