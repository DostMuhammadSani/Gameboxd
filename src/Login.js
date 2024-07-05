import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Auth.css";
function Login() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    axios.post('http://localhost:5000/login', { username, password })
      .then(response => {
        alert("Welcome");
        if (response.data.success) {
          localStorage.setItem("username", username);
          navigate('/main');
        }
      })
      .catch(error => {
        alert("Invalid Credentials");
      });
  };

 

  useEffect(() => {
    setValue(localStorage.getItem("username"));
  }, []);

  return (
    <div className='signbod'>
    <div className="sign">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="User Name" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
     
      </form>
    </div>
    </div>
  );
}

export default Login;
