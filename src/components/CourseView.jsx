import { useState } from "react";
import MyCourseHeader from "./MyCourseHeader";
import UserProfile from "./UserProfile";
import VideoPlayer from "./VideoPlayer";
import CourseCard from "./CourseCard";
import profileImg from '../assets/profile.avif'
import { Rating } from "primereact/rating";
export default function CourseView({ usrname, usrProfilePath }) {
  const options = ["Video", "Resource"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <MyCourseHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      <div className="course_view_container mx-auto container max-w-[1280px]">
        <nav className="flex justify-between items-center mx-auto container max-w-[1280px]">
          <i className="text-4xl pi pi-bars"></i>
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
          <div className="my-5" >
            <h3>Learn About Basic ICT</h3> {/** Lesson Title */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              inventore dicta in. Voluptatem voluptatibus pariatur quas nisi
              culpa est neque harum. Iure, esse illo! Iure eligendi nulla
              repellat at unde.
            </p>
          </div>
          <div className="rating">
            This is rating pages
            <Rating value={5} readOnly cancel={false} />
          </div>
          <CourseCard teacher_profile_path={profileImg} />
        </div>
      </div>
    </>
  );
}
