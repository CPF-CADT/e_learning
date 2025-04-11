import React from 'react';
import { Link } from 'react-router-dom';
import './style/AuthWelcome.css';

const AuthWelcome = () => {
  return (
    <div className="auth-container">
      {/* Left Section */}
      

      {/* Right Section */}
      <div className="auth-right">
        <h2 className="welcome-title">Welcome</h2>
        <p className="welcome-text">
          New beginnings or continued growth — your learning journey starts here.
        </p>
        <div className="auth-buttons">
          <Link to="/signup">
            <button className="auth-button">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="auth-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthWelcome;
