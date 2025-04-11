import React from "react";
import Nav from "./Nav";
import "./style/home.css"; 
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FaBook } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsAirplane } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from 'react-icons/fa'; 


const NewsSection = () => {
  const newsData = [
    { category: "ICT", title: "AI Tools Enhancing Language Learning in Digital Education", description: "AI-powered solutions are revolutionizing language education...", image: "https://i.pinimg.com/736x/c9/2a/83/c92a83dd3ccb3d1319cc12f34343e782.jpg" },
    { category: "English", title: "Interactive Platforms Improving English Teaching Methods", description: "The integration of interactive tools is improving teaching methods for English...", image: "https://i.pinimg.com/736x/e0/aa/ce/e0aace4e8ac951195fbbd1a97b0c1d87.jpg" },
    { category: "ICT", title: "Online Learning Platforms Revolutionizing ICT Education", description: "With online tools, ICT education is becoming more accessible and personalized...", image: "https://i.pinimg.com/736x/f1/29/54/f129546f0bec415b2e974454a28c0861.jpg" },
    { category: "English", title: "AI for English Language Learners: Benefits and Challenges", description: "AI has the potential to assist learners of English, but there are challenges to overcome...", image: "https://i.pinimg.com/736x/4c/76/85/4c768549feee70218569a417c8ac15e3.jpg" },
    { category: "ICT", title: "The Role of Virtual Classrooms in ICT Education", description: "Virtual classrooms are transforming how ICT education is delivered and received...", image: "https://i.pinimg.com/736x/51/35/6b/51356b12b0d185f951fd6e7332261183.jpg" },
    { category: "English", title: "Using Technology to Enhance English Writing Skills", description: "New tools are helping students improve their writing abilities in English through digital platforms...", image: "https://i.pinimg.com/736x/a4/78/a3/a478a3124c5d7649a6e46808e432db5d.jpg" }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  // Detect screen size changes
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 480) {
        setCardsPerPage(1); // Mobile: Show 1 card
      } else if (window.innerWidth <= 728){
        setCardsPerPage(2); // Tablet: Show 2 cards
      } else {
        setCardsPerPage(3); // Desktop: Show 3 cards
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(newsData.length / cardsPerPage);
  const visibleCards = newsData.slice(currentIndex * cardsPerPage, currentIndex * cardsPerPage + cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className="news-section-container">
      <div className="news-section">
        <div className="card-wrapper">
          {visibleCards.map((news, index) => (
            <div className="news-card" key={index}>
              <img src={news.image} alt={news.title} />
              <div className="news-card-content">
                <span className="news-card-category">{news.category}</span>
                <h3 className="news-card-title">{news.title}</h3>
                <p className="news-card-description">{news.description}</p>
                <a href="/" className="news-card-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Arrows */}
      <div className="pagination-arrows">
        <button className="pagination-arrow" onClick={prevSlide} disabled={currentIndex === 0}>
          &#8592;
        </button>
        <button className="pagination-arrow" onClick={nextSlide} disabled={currentIndex === totalPages - 1}>
          &#8594;
        </button>
      </div>
    </div>
  );
};




const testimonials = [
  {
    name: "Jenny Wilson",
    role: "English Language Instructor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The beauty of language is in its ability to connect cultures and minds."
  },
  {
    name: "Guy Hawkins",
    role: "ICT Instructor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Technology is the future, and understanding it is key to success in today’s world."
  },
  {
    name: "Sarah Brown",
    role: "English Literature Expert",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    quote: "Literature is not just reading, it’s about understanding the world through different perspectives."
  },
  {
    name: "John Smith",
    role: "ICT Specialist",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    quote: "Mastering ICT opens up limitless opportunities in the ever-evolving digital world."
  },
  {
    name: "Maria Johnson",
    role: "English Grammar Specialist",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    quote: "Mastering grammar is essential for clear communication and expressing ideas effectively."
  },
  {
    name: "David Green",
    role: "English Conversation Coach",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    quote: "Engaging in conversations enhances fluency and helps build confidence in speaking English."
  },
  {
    name: "Emily Davis",
    role: "ICT Project Manager",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    quote: "Effective project management in ICT involves constant learning and adaptation to new technologies."
  },
  {
    name: "James Walker",
    role: "English Phonetics Expert",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    quote: "Understanding phonetics helps students perfect their pronunciation and speaking skills."
  },
  {
    name: "Olivia Taylor",
    role: "Web Development Instructor",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote: "Web development is an exciting journey that enables you to create things people interact with daily."
  },
  {
    name: "Lucas Martin",
    role: "ICT Security Expert",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    quote: "In the digital age, understanding cybersecurity is vital for protecting personal and organizational data."
  },
  {
    name: "Rachel Miller",
    role: "English Composition Teacher",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    quote: "Writing is the gateway to self-expression, and mastering composition opens up new possibilities in communication."
  },
  {
    name: "Benjamin Lee",
    role: "ICT Data Analyst",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    quote: "Data analysis helps turn raw information into actionable insights, shaping decisions and strategies."
  },
  {
    name: "Sophia Perez",
    role: "English for Business Instructor",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    quote: "Business English is crucial for communicating effectively in the global workplace."
  },
  {
    name: "Michael Scott",
    role: "ICT Network Engineer",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    quote: "Networking is the backbone of modern communication, enabling connectivity and collaboration."
  },
  {
    name: "Isabella White",
    role: "English Language Researcher",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    quote: "The study of language and its structure opens doors to endless academic and career opportunities."
  },
  {
    name: "Ethan Harris",
    role: "ICT Cloud Solutions Architect",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    quote: "Cloud computing is revolutionizing industries by providing scalable and flexible solutions for businesses."
  }
];


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Move by 1 item
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length); // Move by 1 item
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
          <div key={index} className="testimonial-card-item">
            <div className="icon-container">
              <FaStar className="icon-top-right" />
            </div>
            <div className="testimonial-card-content">
              <img src={testimonial.image} alt="profile" className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-quote">{testimonial.quote}</p>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};


const RunningText = () => {
  const text = "Assessments, Quizzes, Tests";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true); 
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setForward(false); 
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setForward(true); 
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [index, forward, text]);

  return <span className="highlight">{displayedText}</span>;
};
const HeroContent = () => {
  const text = "Studying Online is now much easier";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        
        setDisplayedText("");
        setIndex(0);
      }
    }, 300);

    return () => clearInterval(interval); 
  }, [index, text]);

  return <span className="hero-highlight">{displayedText}</span>;
};




export default function Home({ UserName, ProfilePath, isLogin }) {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="Main">

        <div className="hero-content">
          <h1 className="hero-headline" >
          <HeroContent /> 
           <span className="hero-highlight"> </span> 
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
            <div className="hero-avatar"><img src="https://i.pinimg.com/736x/43/0e/32/430e322a865a76f6f2e11fbde1eb4ba3.jpg" alt="" /></div>
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
            src="https://i.pinimg.com/originals/d7/57/3b/d7573b3e236d935c3f87f3d5668a4695.gif" 
            alt="ICT" 
          />
          <h1 className="overlay-text">Information and Communication Technologies</h1>
        </div>
        
        <div className="image-container">
          <img 
            src="https://i.pinimg.com/originals/dc/dd/e7/dcdde7c22e482a95110477497d8d918b.gif" 
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
           <span className="highlight" ><RunningText/> </span> 
        </h2>
        <p>
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
    <div className="explore-course-section">
  <div className="explore-course-content">
    <h2 className="explore-course-title">Explore Course</h2>
    <p className="explore-course-description">
      Ut sed eros finibus, placerat orci id, dapibus.
    </p>
  </div>
    <div className="explore-course-link">
    <div className="explore-course-icon-wrapper">
    <span className="explore-course-icon"><FaBook /></span>
    <span className="explore-course-icon-text">Lorem Ipsum</span>
  </div>
      <a href="#" className="explore-course-see-all">
        SEE ALL <span className="arrow-icon">➤</span>
      </a>
    </div>
    <div className="card-container">
  <div className="side-cards">
    <div className="side-card orange">Ut Sed Ecc</div>
    <div className="side-card pink">Curabitur Eget</div>
  </div>
  
  <div className="main-card">
    <div className="image-placeholder"> <img src="https://i.pinimg.com/736x/3d/25/7a/3d257af74a01de85d65369c8528ac815.jpg" alt="" /></div>
    <div className="price-section">
      <h2 className="title">ICT</h2>
    </div>
    <div className="btn_enroll">
      <p className="price">$250</p>
      <button className="enroll-btn">Enroll</button>
      </div>
  </div>
</div>
    <div className="explore-course-link">
    <div className="explore-course-icon-wrapper">
    <span className="explore-course-icon"><FaEarthAfrica /></span>
    <span className="explore-course-icon-text">Lorem Ipsum</span>
  </div>
      <a href="#" className="explore-course-see-all">
        SEE ALL <span className="arrow-icon">➤</span>
      </a>
    </div>
    <div className="card-container">
    <div className="main-card">
    <div className="image-placeholder"><img src="https://i.pinimg.com/736x/77/17/20/771720f7a6ac45cc12cd3427c8341bcd.jpg" alt="" /></div>
    <div className="price-section">
      <h2 className="title">ICT</h2>
    </div>
    <div className="btn_enroll">
      <p className="price">$250</p>
      <button className="enroll-btn">Enroll</button>
      </div>
  </div>
  <div className="side-cards sidecard-second">
    <div className="side-card orange">Ut Sed Ecc</div>
    <div className="side-card pink">Curabitur Eget</div>
  </div>
  
  
</div>
    <div className="explore-course-link">
    <div className="explore-course-icon-wrapper">
    <span className="explore-course-icon"><BsAirplane /></span>
    <span className="explore-course-icon-text">Lorem Ipsum</span>
  </div>
      <a href="#" className="explore-course-see-all">
        SEE ALL <span className="arrow-icon">➤</span>
      </a>
    </div>
    <div className="card-container">
  <div className="side-cards">
    <div className="side-card orange">Ut Sed Ecc</div>
    <div className="side-card pink">Curabitur Eget</div>
  </div>
  
  <div className="main-card">
    <div className="image-placeholder"><img src="https://i.pinimg.com/736x/01/50/61/01506120e1aaa0d30a5cc0f75543b089.jpg" alt="" /></div>
    <div className="price-section">
      <h2 className="title">ICT</h2>
    </div>
    <div className="btn_enroll">
      <p className="price">$250</p>
      <button className="enroll-btn">Enroll</button>
      </div>
  </div>
</div>
  </div>
  <div className="question_session">
    <div className="text-session">
    <h1>What They Say?</h1>
    <p>
    ASDC has got more than 100k positive ratings from our users around the world. 
    </p>
    <p>
    Some of the students and teachers were greatly helped by the Skilline.
    </p>
    <p>
    Are you too? Please give your assessment
    </p>
    </div>
    <div className="card_survey">
      <div className="line"></div>
      <p>
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. 
      </p>
      <div className="rate">
        <p>Nak</p>
        <span className="star">⭐⭐⭐⭐⭐</span>
      </div>
      <p id="review">12 reviews at Yolp</p>
    </div>
  </div>
  <div className="control_accesment">
    <button className="btn_accessment"><span id="text_btn">Write your accessment</span></button>
    <span className="arroww"><FaArrowRight /></span>
  </div>
     <div className="stu_feedback">
      <h1>Student <span className="feedback">Feedback</span></h1>
      <p id="Para_feedback" >Various versions have evolved over the years, sometimes by accident</p>
    <TestimonialCarousel />
     </div>
    <div className="Last_News">
      <h1>Lastest News and Resources</h1>
      <p>See the developments that have occurred to TOTC in the world</p>
      <NewsSection/>
    </div>
    </div>
  );
}
