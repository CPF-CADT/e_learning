import { Link } from "react-router-dom";
import ShowPrice from "./ShowPrice";
import { Rating } from "primereact/rating";
import { useNavigate } from 'react-router-dom'; 


export default function CourseCard({
  image,
  title,
  description,
  category,
  duration,
  teacher_profile_path,
  price,
  discountPercent,
  rate,
  setCart,
}) {
  function addToCart() {
    setCart((prev) => [
      ...prev,
      {
        courseTitle: title,
        courseDescription: description,
        courseImage: image,
        courseDuration: duration,
        price: price,
        discountPercent: discountPercent,
        star: rate,
      },
    ]);
  }
  const navigate = useNavigate(); 
  function goDetail(){
    const convertTitleToSlug = (title) => title.trim().replace(/\s+/g, '-');    
      navigate('/course/'+convertTitleToSlug(title)+'/detail');
  }
  return (
    <>
      <div className="course-card w-[280px] h-[380px] p-3 border-black rounded-lg shadow-lg hover:cursor-pointer">
        <div className="h-[150px] w-full overflow-hidden rounded-md" onClick={goDetail}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-row justify-between my-2 text-xs text-gray-600" onClick={goDetail}>
          <span>
            <i className="pi pi-th-large mr-1"></i>
            {category}
          </span>
          <span className="ml-auto">
            <i className="pi pi-clock mr-1"></i>
            {duration}
          </span>
        </div>

        {/* Course Description Section */}
        <div onClick={goDetail}>
          <h3 className="font-bold text-sm leading-tight h-[38px] overflow-hidden">
            {title}
          </h3>
          <p className="mt-1 text-xs text-gray-700 overflow-hidden h-[36px] line-clamp-2">
            {description}
          </p>
        </div>

        {/* Teacher Info Section */}
        <div className="flex flex-row justify-between mt-2 items-center" onClick={goDetail}>
          <div className="flex flex-row items-center gap-1">
            <img
              src={teacher_profile_path}
              alt="Profile"
              className="w-[35px] h-[35px] rounded-full"
            />
            <span className="text-xs">Teacher</span>
            <Rating value={rate} readOnly cancel={false} />
          </div>
        </div>
        {/* Action Section */}
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={addToCart}
            className="h-[35px] w-[150px] rounded-lg bg-blue-500 text-white hover:bg-blue-800 text-[0.7rem] hover:cursor-pointer"
          >
            <i className="pi pi-shopping-cart"></i> ADD TO CART
          </button>
          <ShowPrice price={price} discountPercent={discountPercent} onClick={goDetail} />
        </div>
      </div>
    </>
  );
}
