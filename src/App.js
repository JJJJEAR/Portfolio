import React from 'react';
import HomePage from './components/Home/Homepage';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
