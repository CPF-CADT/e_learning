import React, { useState } from "react";
import CourseCard from "./CourseCard";
import "./maincourse.css"; // External CSS

const dummyProfiles = [
  "https://i.pravatar.cc/35?img=1",
  "https://i.pravatar.cc/35?img=2",
  "https://i.pravatar.cc/35?img=3",
  "https://i.pravatar.cc/35?img=4",
  "https://i.pravatar.cc/35?img=5",
  "https://i.pravatar.cc/35?img=6",
];

export default function Course() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const next = () => {
    if (startIndex + visibleCards < dummyProfiles.length) {
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
      <h1 className="title">Course Component</h1>
      <div className="carousel-container">
        <button onClick={prev} className="arrow-btn">←</button>
        <div className="carousel-track">
          {dummyProfiles.slice(startIndex, startIndex + visibleCards).map((path, index) => (
            <CourseCard key={index} teacher_profile_path={path} />
          ))}
        </div>
        <button onClick={next} className="arrow-btn">→</button>
      </div>
    </div>
  );
}
