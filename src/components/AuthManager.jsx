import React, { useState } from 'react';
import Login from './Login';
import UserProfile from './UserProfile';

export default function AuthManager() {
  const [isLogin, setIsLogin] = useState(false); // To manage login state

  const handleLogin = () => {
    setIsLogin(true); 
  };

  const handleLogout = () => {
    setIsLogin(false); 
  };

  return (
    <>
      {!isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <UserProfile
          UserName="Username"
          ProfilePath="https://i.pravatar.cc/64"
          positionTop="70px"
          onLogout={handleLogout} 
        />
      )}
    </>
  );
}
