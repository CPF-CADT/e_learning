import MyCourseHeader from "./MyCourseHeader"
import { useState } from "react";
import UserProfile from "./UserProfile";
import userProfile from '../assets/profile.avif'; 
import ListLearnResource from "./ListLearnResource";
export default function CourseClick(){
    const optionsCourse = ['Courses Content','Progress'];
    const [selectedOption, setSelectedOption] = useState(optionsCourse[0]); 
    return(
        <>
             <MyCourseHeader
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                options={optionsCourse}
            />
            {selectedOption==='Courses Content'&& (
                <div className="max-w-[1290px] mx-auto">
                    <div className="flex flex-row justify-between items-center">
                        <span className="flex flex-row items-center font-bold text-xl hover:cursor-pointer" ><i style={{fontSize:'1.5rem'}} className="pi pi-angle-left" ></i> Back </span>
                        <UserProfile
                            UserName={"Jonnh"}
                            ProfilePath={userProfile}
                            positionTop="50px" // Pass the dynamic top value
                        />
                    </div>
                    <div className="bg-amber-300 h-40">
                        Image
                    </div>
                    <h2>Information and Comunication Technology</h2>
                    <ListLearnResource />
                </div>
            )}
        </>
    )
}