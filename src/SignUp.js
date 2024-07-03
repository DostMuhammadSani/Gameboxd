import React from 'react';
import './Auth.css'; 

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label>User Name</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>
         
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
