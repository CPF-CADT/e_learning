import './style/nav.css';
import imgLogo from '../assets/logo.png';
import UserProfile from './UserProfile';
import { Link } from "react-router-dom";
import CartCard from './Cart'

export default function Nav({ UserName, ProfilePath, isLogin }) {
  return (
    <div className="navigation-bar">
      <div>
        <Link to='/'>
          <img 
            className='hover:cursor-pointer'
            src={imgLogo}
            alt="Logo"
            style={{ width: '250px', height: '70px' }}
          />
        </Link>
      </div>
      <div className="middle-side px-5 text-[1.2rem]">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><Link to ='/about-us'>About US</Link></li>
          <li><Link to ='/mycourse'>My Learning</Link></li>
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
        <div  className='flex flex-row items-center gap-x-5'
          style={{
            display: (!isLogin) ? 'none' : 'flex',
          }} 
          >
          <CartCard itemCount={0} />
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
