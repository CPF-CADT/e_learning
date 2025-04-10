import React from "react";

export default function LessonCard({ title, teacher, image, progress, currentLesson, totalLessons }) {
  return (
    <div className="lesson-card">
      <img src={image} alt="Course" className="lesson-image" />
      <div className="lesson-content">
        <h4 className="lesson-title">{title}</h4>
        <div className="lesson-teacher">
          <div className="teacher-avatar"></div>
          <span>{teacher}</span>
        </div>
        <div className="lesson-progress-bar">
          <div className="progress-filled" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="lesson-count">Lesson {currentLesson} of {totalLessons}</p>
      </div>
    </div>
  );
}
