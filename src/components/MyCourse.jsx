import { useState } from "react";
import MyCourseHeader from "./MyCourseHeader";
import UserProfile from "./UserProfile";
import DetailDashBoard from "./DetailDashBorard";
import CourseBoxLearn from "./CourseBoxLearn";
import courseData from "../data/courseLeened";
import DropDown from "./DropDown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Paginator } from 'primereact/paginator';
export default function MyCourse({ usrname, usrProfilePath }) {
  const [selectedOption, setSelectedOption] = useState("My Courses"); // Manage the state here
  const [selectedCourseType, setSelectedCourseType] = useState(null);
  const [selectedShortCourse, setSelectedShortCourse] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };
  // Options for each dropdown
  const courseTypes = [
    { name: "ALL", code: "ALL" },
    { name: "English", code: "ENG" },
    { name: "ICT", code: "ICT" },
  ];

  const shortCourseOptions = [
    { name: "By Name", code: "NAME" },
    { name: "By Date", code: "DATE" },
  ];
  return (
    <>
      <MyCourseHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="container max-w-[1280px] mx-auto">
        <nav className="flex justify-between items-center mx-auto">
          <h2 className="text-black font-bold text-2xl">My Course</h2>
          <UserProfile
            UserName={usrname}
            ProfilePath={usrProfilePath}
            positionTop="50px" // Pass the dynamic top value
          />
        </nav>
        <h3 className="text-black font-bold text-xl pb-4 mb-5 border-b-[1px] border-black w-[67.5%]">Course Overview</h3>
        <div className="dashboard flex flex-row min-h-[660px] gap-x-[2%]">
          <div className="w-[70%] flex flex-col ">
            <div className="flex felx-row gap-x-2">
              <DropDown
                selectItem={selectedCourseType}
                setSelectItem={setSelectedCourseType}
                options={courseTypes}
                label="course type"
              />

              <DropDown
                selectItem={selectedShortCourse}
                setSelectItem={setSelectedShortCourse}
                options={shortCourseOptions}
                label="sort course"
              />
              <div className="flex gap-3">
                <IconField iconPosition="left">
                  <InputIcon className="pi pi-search"> </InputIcon>
                  {/* <InputText 
                      value={searchValue}  // Bind value to state
                      onChange={handleInputChange}  // Update state when input changes
                      placeholder="Search" 
                    /> */}
                    <InputText 
                      placeholder="Search" 
                    />
                </IconField>  
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-5">
              {courseData.map((course, index) => {
                // Check if selectedOption is 'My Courses'
                if (selectedOption === "My Courses") {
                  return (
                    <CourseBoxLearn
                      key={index}
                      courseTitle={course.courseTitle}
                      courseHook={course.courseHook}
                      progress={course.progress}
                    />
                  );
                } else {
                  // Check if the course is marked as a favorite
                  if (course.favourite) {
                    return (
                      <CourseBoxLearn
                        key={index}
                        courseTitle={course.courseTitle}
                        courseHook={course.courseHook}
                        progress={course.progress}
                      />
                    );
                  }
                }

                // Optionally return null in case none of the conditions are met
                return null;
              })}
            </div>
            <div className="card">
              1 2 3 4 5 6 7 8  9
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-start p-0">
            <DetailDashBoard />
          </div>
        </div>
      </div>
    </>
  );
}
