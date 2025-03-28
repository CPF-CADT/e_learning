import React from "react";
import Nav from "./Nav";
import "./style/home.css"; 
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function Home({ UserName, ProfilePath, isLogin }) {
  return (
    <div>
      
      <Nav UserName={UserName} ProfilePath={ProfilePath} isLogin={isLogin} />

     
      <div className="hero-container">
        <div className="Main">

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
          <p id="com_text">Your admission completed</p>
          
        </div>
        <div className="hero-notification hero-notification-3">
          <span className="hero-icon">📋</span>
        </div>
        <div className="hero-notification hero-user-notification hero-notification-4">
          <div className="hero-user-info">
            
            <div>
            <div className="hero-avatar"><img src="https://i.pinimg.com/736x/1d/13/c7/1d13c7f72f9c45c7c7e09d1c38046f9b.jpg" alt="" /></div>
              <p className="hero-user-text">User Experience Class</p>
              <p className="hero-time-text">Today at 12:00 PM</p>
            </div>
          <button className="hero-join-button">Join Now</button>
          </div>
        </div>
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
        <p >ASDC is a platform that allows Users buy course, for studying, and we provide the</p>
        <p id="Para_asdc">certificate for User who finished the Course</p>
        
        <div className="image_intro">
        <div className="image-container">
          <img 
            src="https://i.pinimg.com/736x/54/2b/18/542b18860b9a98fdd7df4613775f9975.jpg" 
            alt="ICT" 
          />
          <h1 className="overlay-text">Information and Communication Technologies</h1>
        </div>
        
        <div className="image-container">
          <img 
            src="https://i.pinimg.com/736x/15/a6/ea/15a6eab44d478976f71969f5c951dbfd.jpg" 
            alt="English" 
          />
          <h1 className="overlay-text">English</h1>
        </div>
      </div>
        <button className="btn-start_course"><span id="start_now">Start a Course Now</span></button>
      </div>
      <div className="home-container">
        
      <div className="quiz-section">
        <div className="quiz-card">
          <div className="circle"></div>
          <div className="question-badge">Question 1</div>
          <h2 id="answer">True or false?</h2>
          <img src="https://i.pinimg.com/736x/40/34/7d/40347d67dca143c047f78d3134f1215e.jpg" alt="Quiz" className="quiz-image" />
          <div className="answer-feedback">
            <span className="icon">🚀</span>
            Your answer was sent successfully
          </div>
        <div className="circle1"></div>
        </div>
        <div className="action-buttons">
          <div className="circle-button wrong">❌</div>
          <div className="circle-button correct">✅</div>
        </div>
      </div>
      <div className="info-section">
        <h2>
          Assessments, <span className="highlight">Quizzes, </span> Tests
        </h2>
        <p>
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
    </div>
  );
}