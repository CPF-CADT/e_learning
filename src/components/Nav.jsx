import './style/nav.css';
import imgLogo from '../assets/logo.png';
import UserProfile from './UserProfile';

export default function Nav({ UserName, ProfilePath, isLogin }) {
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
        <div  
          style={{
            display: (!isLogin) ? 'none' : 'flex',
          }} 
          >
          <UserProfile 
            UserName={UserName} 
            ProfilePath={ProfilePath} 
            positionTop="50px"  
          />
        </div>
      </div>
    </div>
  );
}
