import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import LessonCard from "./LessonCard";
import "./style/maincourse.css";


import courseData from "../data/courseData";
const dummyProfiles = [
  "https://i.pravatar.cc/35?img=1",
  "https://i.pravatar.cc/35?img=2",
  "https://i.pravatar.cc/35?img=3",
  "https://i.pravatar.cc/35?img=4",
  "https://i.pravatar.cc/35?img=5",
  "https://i.pravatar.cc/35?img=6",
  "https://i.pravatar.cc/35?img=7",
  "https://i.pravatar.cc/35?img=8",
  "https://i.pravatar.cc/35?img=9",
  "https://i.pravatar.cc/35?img=10",
  "https://i.pravatar.cc/35?img=11",
  "https://i.pravatar.cc/35?img=12",
  "https://i.pravatar.cc/35?img=13",
  "https://i.pravatar.cc/35?img=14",
  "https://i.pravatar.cc/35?img=15",
  "https://i.pravatar.cc/35?img=16",
  "https://i.pravatar.cc/35?img=17",
  "https://i.pravatar.cc/35?img=18",
  "https://i.pravatar.cc/35?img=19",
  "https://i.pravatar.cc/35?img=20",
  "https://i.pravatar.cc/35?img=21",
  "https://i.pravatar.cc/35?img=22",
  "https://i.pravatar.cc/35?img=23",
  "https://i.pravatar.cc/35?img=24",
];

const exploreCourses = [
  {
    courseTitle: "Digital Marketing",
    courseDescription: "Learn SEO, social media, and online branding from scratch.",
    courseImage: "https://i.pinimg.com/736x/82/f9/28/82f928131092f8924f487935680893d7.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=10",
    courseDuration: "2 Months",
    category: "Marketing",
    price: 80,
    discountPercent: 10,
  },
  {
    courseTitle: "UI/UX Design",
    courseDescription: "Master design thinking and build user-friendly interfaces.",
    courseImage: "https://i.pinimg.com/736x/46/0e/f3/460ef3c3fa05eae192e32d056fc5339d.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=11",
    courseDuration: "3 Months",
    category: "Design",
    price: 95,
    discountPercent: 20,
  },
  {
    courseTitle: "Business Communication-Intermidiate",
    courseDescription: "Improve professional speaking, writing, and presentation skills.",
    courseImage: "https://i.pinimg.com/736x/c7/ec/6d/c7ec6dc0d3d415391f87a138c440452e.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=12",
    courseDuration: "1.5 Months",
    category: "Business",
    price: 70,
    discountPercent: 15,
  },
];

const personalDevelopmentCourses = [
  {
    courseTitle: "English Level 5: Academic English for University",
    courseDescription: "Learn to write essays, reports, and research papers with academic vocabulary and structure.",
    courseImage: "https://i.pinimg.com/736x/d4/88/9b/d4889b1b8d6e65a6a0f22d925958f030.jpg",
    teacherProfilePath: dummyProfiles[6],
    courseDuration: "3 Months",
    category: "English",
    price: 110,
    discountPercent: 20,
  },
  {
    courseTitle: "ICT Level 3: Introduction to Networking",
    courseDescription: "Understand how computer networks work, including IP addressing, routers, and switches.",
    courseImage: "https://i.pinimg.com/originals/a3/6c/0e/a36c0e58e081afd3f5802ecd63e2fc6b.gif",
    teacherProfilePath: dummyProfiles[7],
    courseDuration: "3 Months",
    category: "ICT",
    price: 115,
    discountPercent: 15,
  },
  {
    courseTitle: "ICT Level 4: Cybersecurity Basics",
    courseDescription: "Learn how to stay safe online, secure systems, and understand threats like phishing and malware.",
    courseImage: "https://i.pinimg.com/736x/6d/9a/ce/6d9aced532d110a8215b944ff041b017.jpg",
    teacherProfilePath: dummyProfiles[8],
    courseDuration: "2 Months",
    category: "ICT",
    price: 95,
    discountPercent: 12,
  },
];

const lessonData = [
  {
    title: "English Level 5: Academic English for University",
    teacher: "Chanthy",
    image: "https://i.pinimg.com/originals/be/58/45/be5845d217aacf00a1683e1e292a5e8c.gif",
    progress: 80,
    currentLesson: 4,
    totalLessons: 10,
  },
  {
    title: "ICT Level 3: Introduction to Networking",
    teacher: "Pisey",
    image: "https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif",
    progress: 45,
    currentLesson: 3,
    totalLessons: 8,
  },
  {
    title: "ICT Level 4: Cybersecurity Basics",
    teacher: "Rith",
    image: "https://i.pinimg.com/originals/9c/18/fd/9c18fdf528054ff9ff7ddfae62ee107a.gif",
    progress: 25,
    currentLesson: 2,
    totalLessons: 6,
  },
];


export default function Course({ UserName, ProfilePath, isLogin }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="main-container">
        <div className="welcome-section">
          <h2 className="title">Welcome back, ready for your next lesson?</h2>
          <div className="search-cart-container">
            <input
              type="text"
              placeholder="Search Courses Here..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="lesson-row">
          {lessonData
            .filter((lesson) =>
              lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((lesson, index) => (
              <div key={index} className="lesson-card-container">
                <LessonCard {...lesson} />
                
              </div>
            ))}
        </div>

        {/* ===== New Category Section ===== */}
        <h2 className="title">Choices favourite course from top category</h2>
        <div className="category-grid">
          {["ICT", "English", "English", "English", "ICT", "English", "English", "English" ,"ICT"].map((category, index) => (
            <div key={index} className="category-card">
              <div className={`category-image ${category.toLowerCase()}`}></div>
              <h3 className="category-title">{category}</h3>
              <p className="category-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
        <div className="btn_seemore">

        <h2 className="title">Recommended For You</h2>
        <a href="#" className="explore-course-see-all">
        SEE MORE<span className="arrow-icon">➤</span>
      </a>
        </div>
        <CourseCarousel courseData={courseData} />
        {/* === Personal Development Courses Section === */}
          {/* === Personal Development Section === */}
<h2 className="title">Get Choice Of Your Course</h2>
  <div className="personal-development-grid">
  {personalDevelopmentCourses.map((course, index) => (
    <CourseCard
      key={index}
      image={course.courseImage}
      title={course.courseTitle}
      description={course.courseDescription}
      teacher_profile_path={course.teacherProfilePath}
      duration={course.courseDuration}
      category={course.category}
      price={course.price}
      discountPercent={course.discountPercent}
    />
  ))}
  </div>
  <div className="online_course">
    <h2 id="name_course">Online coaching lessons for remote learning.</h2>
    <p id="desc-course">
    Lorem ipsum dolor sit amet, c, sed do eiusmod tempos Lorem ipsum dolor sitamet, 
    consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempos Lorem ipsum dolor sitamet,
    </p>
    <button id="btn_startnow" >Start learning now</button>
  </div>
  
  

    <h2 id="update_course">The course in personal development</h2>
  <div className="explore-course-grid">
    {exploreCourses.map((course, index) => (
      <CourseCard
        key={index}
        image={course.courseImage}
        title={course.courseTitle}
        description={course.courseDescription}
        teacher_profile_path={course.teacherProfilePath}
        duration={course.courseDuration}
        category={course.category}
        price={course.price}
        discountPercent={course.discountPercent}
      />
    ))}
  </div>

      </div>
    </>
  );
}

function CourseCarousel({ courseData }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setVisibleCards(1);
      } else if (screenWidth <= 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(5);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = Math.ceil(courseData.length / visibleCards);
  const currentPage = Math.floor(startIndex / visibleCards);

  const goToPage = (pageIndex) => {
    // Loop to beginning if out of bounds
    if (pageIndex >= totalPages) {
      setStartIndex(0);
    } else if (pageIndex < 0) {
      setStartIndex((totalPages - 1) * visibleCards);
    } else {
      setStartIndex(pageIndex * visibleCards);
    }
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
      {courseData.slice(startIndex, Math.min(startIndex + visibleCards, courseData.length)).map((course, index) => (
  <CourseCard
    key={index}
    image={course.courseImage}
    title={course.courseTitle}
    description={course.courseDescription}
    teacher_profile_path={course.teacherProfilePath}
    duration={course.courseDuration}
    category={course.category}
    price={course.price}
    discountPercent={course.discountPercent}
  />
))}

      </div>

      {/* Dots */}
      <div className="dot-navigation">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => goToPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
