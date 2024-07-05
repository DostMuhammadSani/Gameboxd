import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Auth.css";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    axios.post('http://localhost:5000/signup', { username, password })
      .then(response => {
        if (response.data.success) {
          alert("Account Created");
          navigate('/login');
        }
      })
      .catch(error => {
        alert(`Error creating account: ${error.response?.data?.error || error.message}`);
      });
  };

  return (
    <div className='signbod'>
    <div className="sign">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="User Name" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
