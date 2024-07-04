import React from 'react';
import { useParams } from 'react-router-dom';
import './GameDetail.css';

const GameDetail = () => {
  const { id } = useParams();

  return (
    <div className="gd">
      <h1>Game Detail for Game {id}</h1>
      {/* You can add more details about the game here */}
    </div>
  );
};

export default GameDetail;
