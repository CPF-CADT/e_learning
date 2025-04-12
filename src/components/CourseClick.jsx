import MyCourseHeader from "./MyCourseHeader";
import { useState } from "react";
import ListLearnResource from "./ListLearnResource";
import courseResource from '../data/LearningResource'
export default function CourseClick({ course }) {
    const optionsCourse = ["Courses Content", "Progress"];
    const [selectedOption, setSelectedOption] = useState(optionsCourse[0]);
    function getCourseDocByTitle(title) {
        return courseResource.find(c => c.title === title); // Using `title` here instead of `courseTitle`
    }

    const courseDoc = getCourseDocByTitle(course.courseTitle);    console.log(courseDoc)
  return (
    <>
      <MyCourseHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={optionsCourse}
      />
      {selectedOption === "Courses Content" && (
        <div className="max-w-[1290px] mx-auto">
          <div className="bg-amber-300 h-40 overflow-hidden">
            <img
              src={course.cimg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-bold text-2xl my-4">{course.courseTitle}</h2>
          <ListLearnResource items={courseDoc.items} />
        </div>
      )}
    </>
  );
}
