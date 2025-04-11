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
]
const exploreCourses = [
  {
    courseTitle: "Digital Marketing",
    courseDescription: "Learn SEO, social media, and online branding from scratch.",
    courseImage: "https://i.pinimg.com/736x/11/17/15/1117155552b6004f5f83ec869f606632.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=10",
    courseDuration: "2 Months",
    category: "Marketing",
    price: 80,
    discountPercent: 10,
  },
  {
    courseTitle: "UI/UX Design",
    courseDescription: "Master design thinking and build user-friendly interfaces.",
    courseImage: "https://i.pinimg.com/736x/b4/a4/5d/b4a45d36b77279604009ab67e3c5ae31.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=11",
    courseDuration: "3 Months",
    category: "Design",
    price: 95,
    discountPercent: 20,
  },
  {
    courseTitle: "Business Communication",
    courseDescription: "Improve professional speaking, writing, and presentation skills.",
    courseImage: "https://i.pinimg.com/736x/ad/34/41/ad34412722868bea06ccd6643d53420a.jpg",
    teacherProfilePath: "https://i.pravatar.cc/35?img=12",
    courseDuration: "1.5 Months",
    category: "Business",
    price: 70,
    discountPercent: 15,
  },
];

const personalDevelopmentCourses = [
  {
    courseTitle: "English",
    courseDescription: "Learn grammar, speaking, and reading from scratch with personalized content.",
    courseImage: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    teacherProfilePath: dummyProfiles[0],
    courseDuration: "3 Months",
    category: "Language",
    price: 100,
    discountPercent: 20,
  },
  {
    courseTitle: "Information Communication Technologies",
    courseDescription: "A beginner-friendly ICT course covering digital skills and technology use.",
    courseImage: "https://i.pinimg.com/736x/22/6b/05/226b056f7fa30bfaf8ad2b0b3a14e903.jpg",
    teacherProfilePath: dummyProfiles[1],
    courseDuration: "4 Months",
    category: "Technology",
    price: 110,
    discountPercent: 15,
  },
  {
    courseTitle: "English",
    courseDescription: "Master conversational English with vocabulary, pronunciation, and more.",
    courseImage: "https://i.pinimg.com/736x/2c/76/47/2c76471c69e18decf1afe9ef2c0cab96.jpg",
    teacherProfilePath: dummyProfiles[2],
    courseDuration: "3 Months",
    category: "Language",
    price: 90,
    discountPercent: 10,
  },
];

const lessonData = [
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/22/6b/05/226b056f7fa30bfaf8ad2b0b3a14e903.jpg",
    progress: 60,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/2c/76/47/2c76471c69e18decf1afe9ef2c0cab96.jpg",
    progress: 70,
    currentLesson: 1,
    totalLessons: 7,
  },
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    progress: 20,
    currentLesson: 5,
    totalLessons: 7,
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
              placeholder="Search lessons or courses..."
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

  const next = () => {
    if (startIndex + visibleCards < courseData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {courseData.slice(startIndex, startIndex + visibleCards).map((course, index) => (
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
      <div className="btn_control">
        <button onClick={prev} className="arrow-btn">←</button>
        <button onClick={next} className="arrow-btn">→</button>
      </div>
    </div>
  );
}
