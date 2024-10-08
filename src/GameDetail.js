import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GameDetail.css';
import gameData from './gameData';
import axios from 'axios';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [submittedReview, setSubmittedReview] = useState('');
  const [submittedRating, setSubmittedRating] = useState('');
  const [username, setUsername] = useState('');
  const [gamename, setGamename] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const game = gameData.find(game => game.id === parseInt(id));
    setGame(game);
    setGamename(game.name);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedReview(review);
    setSubmittedRating(rating);
    axios.post('http://localhost:5000/reviewpost', { username, gamename,review,rating })
      .then(response => {
        alert("Review Posted");
       
      })
      .catch(error => {
        alert("Review Not Posted");
      });
  };

  

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
    <img src={game.image2}  className="background-image" />
    <div className="content">
      <div className="details">
        <img src={game.image1}  className="poster" />
        <div>
          <h1>{game.name}</h1>
        
          <p>{game.description}</p>
          <br>
          </br>
          <br>
          </br>
          <a href={game.link}>
          Download
        </a>
            </div>
      </div>
      <div className="actions">
       
          <form onSubmit={handleSubmit} className="review-form">
            <input 
              type="text" 
              placeholder="Write a review" 
              value={review} 
              onChange={(e) => setReview(e.target.value)} 
              className="input-box"
            />
            <input 
              type="number" 
              step="0.1" 
              placeholder="Decimal rating" 
              value={rating} 
              onChange={(e) => setRating(e.target.value)} 
              className="input-box"
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        {submittedReview && submittedRating && (
          <div className="submitted-data">
            <h2>Submitted Review</h2>
            <p>Review: {submittedReview}</p>
            <p>Rating: {submittedRating}</p>
          </div>
        )}
      </div>

  </div>
  );
};

export default GameDetail;
