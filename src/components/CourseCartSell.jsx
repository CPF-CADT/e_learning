import ShowPrice from "./ShowPrice";
import { Rating } from "primereact/rating";

export default function CourseCartSell({ pimg, ptitle, prate, price, pdis,duration, onRemove }) {
  return (
    <div className="flex items-center gap-x-5 p-2 border rounded-xl bg-white mt-5">
      <img
        src={pimg}
        alt="Product image"
        className="w-3xs h-20 object-cover rounded-md"
      />
      <div className="flex flex-row justify-between w-full pr-5">
        <div className="flex flex-col justify-between gap-y-2">
          <span className="text-lg font-semibold text-gray-800">
            {ptitle}
          </span>
          <span className="text-sm text-yellow-500 font-medium">
            <Rating value={prate} readOnly cancel={false} />
          </span>
          <span className="flex flex-row items-center gap-x-2">
            <i className="pi pi-clock mr-1"></i> 
            <span>
              {duration}
            </span>
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span
            className="text-red-500 text-sm hover:underline ml-auto cursor-pointer"
            onClick={onRemove}
          >
            Remove
          </span>
          <span className="text-base font-bold text-gray-800 ml-auto">
            <ShowPrice price={price} discountPercent={pdis} />
          </span>
        </div>
      </div>
    </div>
  );
}
