import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import LessonCard from "./LessonCard";
import "./style/maincourse.css";
import Nav from "./Nav";

const dummyProfiles = [
  "https://i.pravatar.cc/35?img=1",
  "https://i.pravatar.cc/35?img=2",
  "https://i.pravatar.cc/35?img=3",
  "https://i.pravatar.cc/35?img=4",
  "https://i.pravatar.cc/35?img=5",
  "https://i.pravatar.cc/35?img=6",
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

const courseData = [
  {
    courseTitle: "Web Development",
    courseDescription: "Learn how to build modern web applications using HTML, CSS, and JavaScript.",
    courseImage: "https://i.pinimg.com/736x/22/6b/05/226b056f7fa30bfaf8ad2b0b3a14e903.jpg",
    teacherProfilePath: dummyProfiles[0],
    courseDuration: "6 Months",
    category: "Development",
    price: 100,
    discountPercent: 20,
  },
  {
    courseTitle: "React.js Mastery",
    courseDescription: "Become a React.js expert and learn how to create complex applications.",
    courseImage: "https://i.pinimg.com/736x/2c/76/47/2c76471c69e18decf1afe9ef2c0cab96.jpg",
    teacherProfilePath: dummyProfiles[1],
    courseDuration: "4 Months",
    category: "Frontend",
    price: 120,
    discountPercent: 15,
  },
  {
    courseTitle: "Python Programming",
    courseDescription: "Master Python and use it for web development, data science, and more.",
    courseImage: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    teacherProfilePath: dummyProfiles[2],
    courseDuration: "5 Months",
    category: "Programming",
    price: 90,
    discountPercent: 10,
  },
  {
    courseTitle: "Python Programming",
    courseDescription: "Master Python and use it for web development, data science, and more.",
    courseImage: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    teacherProfilePath: dummyProfiles[3],
    courseDuration: "5 Months",
    category: "Programming",
    price: 90,
    discountPercent: 10,
  },
  {
    courseTitle: "Python Programming",
    courseDescription: "Master Python and use it for web development, data science, and more.",
    courseImage: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    teacherProfilePath: dummyProfiles[4],
    courseDuration: "5 Months",
    category: "Programming",
    price: 90,
    discountPercent: 10,
  },
  {
    courseTitle: "Python Programming",
    courseDescription: "Master Python and use it for web development, data science, and more.",
    courseImage: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    teacherProfilePath: dummyProfiles[5],
    courseDuration: "5 Months",
    category: "Programming",
    price: 90,
    discountPercent: 10,
  },
];

export default function Course({ UserName, ProfilePath, isLogin }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* <Nav UserName={UserName} ProfilePath={ProfilePath} isLogin={isLogin} /> */}
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
          {["ICT", "English", "English", "English", "ICT", "English", "English", "English"].map((category, index) => (
            <div key={index} className="category-card">
              <div className={`category-image ${category.toLowerCase()}`}></div>
              <h3 className="category-title">{category}</h3>
              <p className="category-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>

        <h2 className="title">Explore More Courses</h2>
        <CourseCarousel courseData={courseData} />
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
