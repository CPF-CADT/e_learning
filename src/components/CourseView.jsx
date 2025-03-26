import { useState } from "react";
import MyCourseHeader from "./MyCourseHeader";
import UserProfile from "./UserProfile";
import VideoPlayer from "./VideoPlayer";
import CourseCard from "./CourseCard";
import profileImg from '../assets/profile.avif'
import { Rating } from "primereact/rating";
import MarkdownRenderer from './MarkdownRenderer'
export default function CourseView({ usrname, usrProfilePath }) {
  const options = ["Video", "Resource"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  let markdownText = `

  # Introduction to CPU (Central Processing Unit)
  
  
  ## What is a CPU?
  
  The **Central Processing Unit (CPU)** is the "brain" of the computer. It processes instructions and performs calculations to run applications and the operating system.
  
  
  ## Lesson Objectives
  
  By the end of this lesson, you should be able to:
  
  - Understand the role of the CPU in a computer system.
  
  - Identify the key components of a CPU.
  
  `;
  return (
    <>
      <MyCourseHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      <div className="course_view_container mx-auto container max-w-[1280px]">
        <nav className="flex justify-between items-center mx-auto container max-w-[1280px]">
          <i style={{fontSize:'1.7rem'}} className="pi pi-bars hover:cursor-pointer"></i>
          <UserProfile
            UserName={usrname} // Matching prop name to the one passed in the Route
            ProfilePath={usrProfilePath} // Matching prop name to the one passed in the Route
            positionTop="50px"
          />
        </nav>
        <div className="">
          <div className="flex flex-row justify-between px-20">
            <span className="hover:cursor-pointer">
              <i className="pi pi-chevron-left mr-2 font-bold "></i>
              Back
            </span>
            <span>
              <i className="pi pi-clock mr-2"></i>
              Time
            </span>
          </div>
          <div className="justify-center items-center flex mt-5">
            <VideoPlayer
              videoUrl={"https://www.youtube.com/watch?v=3B5CjuiViSc"}
              setWidth={"1120"}
              setHeigh={"640"}
            />
          </div>
          <div className="my-5 px-20" >
            <MarkdownRenderer markdownText={markdownText} />
            </div>
        </div>
      </div>
    </>
  );
}
