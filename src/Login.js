import React from 'react';
import './Auth.css'; // Common CSS file for both Login and SignUp

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>User Name</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
