import ShowPrice from "./ShowPrice";

export default function CourseCard({ teacher_profile_path }) {
  return (
    <div className="course-card w-[280px] h-[380px] p-3 border-black rounded-xl shadow-lg hover:cursor-pointer">
      {/* Image Section */}
      <div className="h-[150px] bg-amber-300">Image</div>
      
      {/* Course Info Section */}
      <div className="flex flex-row justify-between my-2">
        <span>
          <i className="pi pi-th-large mr-1"></i>Design
        </span>
        <span className="ml-auto">
          <i className="pi pi-clock mr-1"></i>3 Month
        </span>
      </div>
      
      {/* Course Description Section */}
      <div>
        <h3 className="font-bold text-sm">Course Title</h3>
        <p className="overflow-hidden mt-1 text-xs">
          Course Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et soluta dolores harum omnis amet. Dolorem aspernatur.
        </p>
      </div>
      
      {/* Teacher Info Section */}
      <div className="flex flex-row justify-between mt-2 items-center">
        <div className="flex flex-row items-center gap-1">
          <img
            src={teacher_profile_path}
            alt="Profile"
            style={{ width: '35px', height: '35px', borderRadius: '50%' }}
          />
          <span className="text-xs">Teacher</span>
        </div>
      </div>
      
      {/* Action Section */}
      <div className="flex justify-between items-center mt-3">
        <ShowPrice price={100} discountPercent={20} />
      </div>
    </div>
  );
}
