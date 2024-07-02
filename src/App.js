import React from 'react';
import './HomePage.css'; 
import image from './Pics/1.jpg'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={image} alt="Background" className="background-image" />
      <nav className="navbar">
        <div className="navbar-left">Gameboxd</div>
        <div className="navbar-right">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </nav>
       <div className="center-content">
        <h1>Welcome to Gameboxd</h1>
        <button className="main-button">Get Started</button>
       
  
      </div>
      <div className='footer'>
        <strong>
        The social network for game lovers.
        </strong>
      </div>
    </div>
  );
};

export default HomePage;
