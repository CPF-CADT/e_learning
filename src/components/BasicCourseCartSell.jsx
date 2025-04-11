export default function BasicCourseCartSell({ pimg, ptitle, price,dis }) {
    return (
      <div className="flex items-center gap-x-5 p-4 border rounded-xl bg-white mt-5 shadow-sm">
        <img
          src={pimg}
          alt="Course image"
          className="w-24 h-12 object-cover rounded-md"
        />
        <div className="flex justify-between w-full pr-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-lg font-semibold text-gray-800">
              {ptitle}
            </span>
          </div>
  
          <div className="flex items-end">
            <span className="text-base font-bold text-gray-800 ">
              ${(price*(1-dis/100)).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  }
  