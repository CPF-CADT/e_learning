import { useState } from "react";
import MyCourseHeader from "./MyCourseHeader";
import VideoPlayer from "./VideoPlayer";
import MarkdownRenderer from './MarkdownRenderer'
export default function CourseView({url}) {
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
              videoUrl={url}
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
