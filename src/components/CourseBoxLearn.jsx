import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProgressBar } from "primereact/progressbar";
import "./style/course.css";
import { useNavigate } from "react-router-dom";
export default function CourseBoxLearn({
  courseTitle,
  courseHook,
  progress,
  cimg,
  sfavourite,
}) {
  const [favourite, setFavourite] = useState(sfavourite);
  const navigate = useNavigate();
  const toggleFavourite = () => {
    setFavourite(!favourite);
  };
  const title = courseTitle;
  const titleWithDashes = title.replace(/\s+/g, '-');
  return (
    <div className="w-[280px] h-[240px] bg-white shadow-md rounded-sm flex flex-col hover:cursor-pointer relative" onClick={()=> navigate(`/mycourse/${titleWithDashes}`)}>
      <div  style={{height:'120px'}} className="w-full h-[120px] rounded-t-lg">
        <img
          src={cimg}
          alt=""
          className="w-full h-[120px] object-cover object-center"
          style={{height:'120px'}}  
        />
      </div>
      <div className="px-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mt-1 h-6 overflow-hidden">{courseTitle}</h2>
        <p className="text-sm text-gray-600 mt-1 h-10 overflow-hidden ">{courseHook}</p>
        <div className="card mt-auto">
          <ProgressBar value={progress} />
        </div>
        <div
          className="absolute bottom-23 right-2 text-red-500 text-xl z-10 hover:scale-110 transition-transform duration-150"
          onClick={(e) => {
            e.stopPropagation(); // Prevents bubbling if wrapped in a link
            toggleFavourite();
          }}
        >
          {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
  