import React from 'react';
import './HomePage.css'; 
import image from './Pics/1.jpg'; 
import Login from './Login';
import Signup from './SignUp';
import {useNavigate,Router} from  'react-router-dom';

const HomePage = () => {
 const navigate = useNavigate();
  const SignUp =()=> {
   
  
      navigate('/signup');
    
}
const LogIn = () => {
    
  
    
     navigate('/login');
    
}
  return (
 
    <div className="home-page">
      <img src={image} alt="Background" className="background-image" />
      <nav className="navbar">
        <div className="navbar-left">Gameboxd</div>
        <div className="navbar-right">
          <button onClick={LogIn} >Sign In</button>
          <button onClick={SignUp}>Sign Up</button>
        </div>
      </nav>
       <div className="center-content">
        <h1>Welcome to Gameboxd</h1>
        <br></br>
        <button className="main-button" onClick={SignUp}>Get Started</button>
       
  
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
