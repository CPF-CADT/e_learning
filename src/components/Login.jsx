import React, { useState } from 'react';
import './style/login.css';
import SignUp from './Signup';

const users = [
  { email: 'user1@gmail.com', password: 'pass123' },
  { email: 'user2@gmail.com', password: 'secret456' },
  { email: 'username@gmail.com', password: 'mypassword' },
  { email: 'admin@gmail.com', password: 'admin2024' }
];

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back!</h1>
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>
          <p className="sub-text">Welcome back! Please login to your account.</p>

          <input
            type="text"
            placeholder="User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button onClick={handleLogin}>Login</button>

          <p className="signup-text">
            New User? <a href="/signup">Sign Up</a>
          </p>

          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}
