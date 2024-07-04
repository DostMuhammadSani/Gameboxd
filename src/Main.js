import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import two from './Pics/two.jpg';
import three from './Pics/three.jpg'; 
import four from './Pics/four.jpg';
import five from './Pics/five.jpg'; 
import six from './Pics/six.jpg'; 
import seven from './Pics/seven.jpg'; 
import eight from './Pics/eight.jpg'; 
import nine from './Pics/nine.jpg';
import ten from './Pics/ten.jpg';   
import eleven from './Pics/eleven.jpg'; 
import twelve from './Pics/twelve.jpg'; 

const Main = () => {
  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-l">Gameboxd</div>
        <div className="navbar-r">
          <a href="#">Profile</a>
          <a href="#">Reviews</a>
        </div>
      </nav>
      <div className="bodi">
        <h1>Welcome back. Here’s what we’ve been playing…</h1>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <div className="popular-games">
          <h2>Popular Games</h2>
          <div className="game-images">
            <Link to="/game/1"><img src={two} alt="Game 1" /></Link>
            <Link to="/game/2"><img src={four} alt="Game 2" /></Link>
            <Link to="/game/3"><img src={eleven} alt="Game 3" /></Link>
            <Link to="/game/4"><img src={seven} alt="Game 4" /></Link>
            <Link to="/game/5"><img src={ten} alt="Game 5" /></Link>
          </div>
          <br></br>
       <br></br>
       <br></br>
       <br></br>

          <h2>Recent Games</h2>
          <div className="game-images">
            <Link to="/game/6"><img src={three} alt="Game 1" /></Link>
            <Link to="/game/7"><img src={five} alt="Game 2" /></Link>
            <Link to="/game/8"><img src={six} alt="Game 3" /></Link>
            <Link to="/game/9"><img src={eight} alt="Game 4" /></Link>
            <Link to="/game/10"><img src={eleven} alt="Game 5" /></Link>
          </div>
          <br></br>
       <br></br>
       <br></br>
       <br></br>
       <h2>Latest News</h2>
       <div className='News'>
        <div className='imagenews'>
         <img src={twelve}></img>
        </div>
        <div className='news'>
            <a href='https://www.ign.com/articles/amazon-is-giving-away-15-pc-games-to-prime-members'>Amazon Prime is giving away 15 PC games for free — including one of the best Star Wars titles ever made</a>
        </div>
       </div>


        </div>
      </div>

    

     
          
          </div>
       

    
  );
};

export default Main;
