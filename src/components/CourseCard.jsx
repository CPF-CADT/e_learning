import ShowPrice from "./ShowPrice";
export default function CourseCard({teacher_profile_path}) {
  return (
    <div className="course-card w-[325px] h-[445px] p-3 border-black rounded-xl shadow-2xl hover:cursor-pointer  ">
      {/* <img src="" alt="" /> */}
      <div className=" h-[180px] bg-amber-300">Image</div>
      <div className="flex flex-row justify-between my-3 ">
        <span>
          <i className="pi pi-th-large mr-2"></i>Design
        </span>
        <span className="ml-auto">
          <i className="pi pi-clock mr-2"></i>3 Month
        </span>
      </div>
      <div >
        <h3 className="font-bold" >Course Title</h3>
        <p className="overflow-hidden  mt-2 ">
          Course Discription Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magnam, et soluta dolores harum omnis amet. Dolorem aspernatur,
        </p>
      </div>
      <div className="flex flex-row justify-between mt-2 items-center">
        <div className="flex flex-row items-center gap-1">
          <img src={teacher_profile_path} alt="Profile" style={{ width: '44px', height: '44px', borderRadius: '50%' }}  />
          <span>Teacher</span>
        </div>
        <ShowPrice price={100} discountPercent={20} />
      </div>
    </div>
  );
}
