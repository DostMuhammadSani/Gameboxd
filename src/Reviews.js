import React, { useEffect,useState } from 'react';
import './ReviewTable.css';
import axios from 'axios';




const ReviewTable = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/reviewget')
      .then(response => {
        if (response.data.success) {
          setReviews(response.data.reviews); // Adjust according to the actual data structure
        }
      })
      .catch(error => {
        alert("Error");
      });
  }, []);
  return (
    <div className='rev'>
      <h2>Game Reviews</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Game Name</th>
              <th>Review</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((reviews, index) => (
              <tr key={index}>
                <td>{reviews.username}</td>
                <td>{reviews.gamename}</td>
                <td>{reviews.review}</td>
                <td>{reviews.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
