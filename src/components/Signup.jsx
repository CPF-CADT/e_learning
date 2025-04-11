import React, { useState } from 'react';
import './style/Signup.css';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !firstName || !lastName || !dob || !location) {
      setMessage('❌ Please fill in all the fields!');
      return;
    }

    // Log the user data to the console
    console.log('User Data:', { email, password, firstName, lastName, dob, location });

    // Simulate a successful sign-up
    setMessage('✅ Sign-up successful!');
    
    // You can now send this data to an API or perform any other actions.
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join Our Community!</h1>
        <p>Start your journey with us today. Learn, grow, and achieve more.</p>
      </div>

      <div className="signup-right">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <p className="sub-text">Create an account to get started.</p>

          <div className="input-row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="input-row">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-row">
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button onClick={handleSignUp}>Sign Up</button>

          <div className="social-icons">
            <span><FaGoogle className="icon google" title="Sign up with Google" /></span>
            <span><FaFacebookF className="icon facebook" title="Sign up with Facebook" /></span>
            <span><FaApple className="icon icloud" title="Sign up with iCloud" /></span>
          </div>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>

          {message && <p className="signup-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}
