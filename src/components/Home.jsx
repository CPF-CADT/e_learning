import React from "react";
import Nav from "./Nav";
import "./style/home.css"; 


export default function Home({ UserName, ProfilePath, isLogin }) {
  return (
    <div>
      
      <Nav UserName={UserName} ProfilePath={ProfilePath} isLogin={isLogin} />

     
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-headline">
           <span className="hero-highlight"> Studying </span> Online is now much easier
          </h1>
          <p className="hero-subheadline">
            TOTC is an interesting platform that will teach you in more an interactive way
          </p>
          <div className="hero-button-group">
            <button className="hero-primary-button"><h5>Join for Free</h5></button>
            <button className="hero-secondary-button">
              <span className="pi-pi-arrow-circle-up">▶</span>
            </button>
            <p id="text_heroSec">Watch how it works</p>
          </div>
        </div>

       
        <div className="hero-notification hero-notification-1">
          <span className="hero-icon">📊</span> 250k Assisted Student
        </div>
        <div className="hero-notification hero-notification-2">
          <span className="hero-icon">📜</span> Congralutions
          <p id="com_text">Your admission completedd</p>
          
        </div>
        <div className="hero-notification hero-notification-3">
          <span className="hero-icon">📋</span>
        </div>
        <div className="hero-notification hero-user-notification hero-notification-4">
          <div className="hero-user-info">
            
            <div className="hero-avatar"><img src="https://i.pinimg.com/736x/1d/13/c7/1d13c7f72f9c45c7c7e09d1c38046f9b.jpg" alt="" /></div>
            <div>
              <p className="hero-user-text">User Experience Class</p>
              <p className="hero-time-text">Today at 12:00 PM</p>
            </div>
          </div>
          <button className="hero-join-button">Join Now</button>
        </div>
      </div>
      <div className="Our_Success">
        <h1 id="Success">Our Success</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, amet quos. Eveniet fugiat sed illum nostrum quam ducimus et consequuntur.</p>
        <p id="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quos.</p>
        <div className="Number">
          <div className="card_num">
         <h6>15K+</h6>
         <p>Total Students</p>
          </div>
          <div className="card_num">
         <h6>75%</h6>
         <p>Total Success</p>
          </div>
          <div className="card_num">
         <h6>35</h6>
         <p>Main questions</p>
          </div>
          <div className="card_num">
         <h6>26</h6>
         <p>Cheif experts</p>
          </div>
          <div className="card_num">
         <h6>16</h6>
         <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className="about_ASDC">
        <h1>What is <span id="asdc">ASDC</span></h1>
        <p>ASDC is a platform that allows Users buy course, for studying, and we provide the</p>
        <p>certificate for User who finished the Course</p>
        <div className="image_intro">
          <img src="https://i.pinimg.com/736x/54/2b/18/542b18860b9a98fdd7df4613775f9975.jpg" alt="" />
          <img src="https://i.pinimg.com/736x/15/a6/ea/15a6eab44d478976f71969f5c951dbfd.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}