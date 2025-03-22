import './nav.css';
import imgLogo from '../assets/logo.png';
import { useState, useEffect } from 'react';

export default function Nav({ UserName, ProfilePath,isLogin }) {
  const [togle, setTogle] = useState(false);

  // Toggle dropdown visibility
  function dropDown() {
    setTogle((prevState) => !prevState);
  }

  return (
    <div className="navigation-bar">
      <div>
        <img
          src={imgLogo}
          alt="Logo"
          style={{ width: '250px', height: '70px' }}
        />
      </div>
      <div className="middle-side">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="right-side" >
        <div className='authenicate-btn' 
          style={{
            display: (!isLogin) ? 'flex' : 'none',
          }} > 
          <button className='login-btn' >Login</button>
          <button className='signup-btn' >Sign up</button>

        </div>
        <span
        onClick={dropDown} 
         style={{
            display: (isLogin) ? 'block' : 'none',
          }}>
            {UserName} <i className="pi pi-chevron-down"></i> </span>
        <img
          className="user-profile"
          src={ProfilePath}
          alt="user profile"
          style={{ width: '64px', height: '64px', borderRadius: '50%', display: (isLogin) ? 'block' : 'none' }}
        />
        <div
          className="profile-right-side"
          style={{
            display: togle ? 'block' : 'none',
          }}
        >
          <ul>
            <li>
              <a href="#">Profile <i className="pi pi-user"></i> </a>
            </li>
            <li>
              <a href="#">Course <i className="pi pi-th-large"></i> </a>
            </li>
            <li>
              <a href="#">Message <i className="pi pi-envelope"></i> </a>
            </li>
            <li>
              <a href="#">Setting <i className="pi pi-cog"></i> </a>
            </li>
            <li>
              <a href="#">Order <i className="pi pi-cart-plus"></i> </a>
            </li>
            <li>
              <a href="#">Help <i className="pi pi-info-circle"></i> </a>
            </li>
            <li>
              <a href="#">Log out <i className="pi pi-sign-out"></i> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
