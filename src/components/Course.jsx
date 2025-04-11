import React, { useState } from "react";
import CourseCard from "./CourseCard";
import LessonCard from "./LessonCard";
import "./style/maincourse.css";
import courseData from "../data/courseData";

const lessonData = [
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/22/6b/05/226b056f7fa30bfaf8ad2b0b3a14e903.jpg",
    progress: 70,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/2c/76/47/2c76471c69e18decf1afe9ef2c0cab96.jpg",
    progress: 70,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    title: "Information and Communication Technologies",
    teacher: "Heng",
    image: "https://i.pinimg.com/736x/1a/63/81/1a6381933bbb6bc51630c82206e1e745.jpg",
    progress: 70,
    currentLesson: 5,
    totalLessons: 7,
  },
];

export default function Course() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

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
    <div className="main-container">
      {/* 🔷 Top Section - Welcome Back Cards */}
      <h2 className="title">Welcome back, ready for your next lesson?</h2>
      <div className="lesson-row">
        {lessonData.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>

      {/* 🔶 Bottom Section - Carousel with Arrows */}
      <h2 className="title">Explore More Courses</h2>
      <div className="carousel-container">
        <button onClick={prev} className="arrow-btn">←</button>
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
        <button onClick={next} className="arrow-btn">→</button>
      </div>
    </div>
  );
}
