import { Rating } from "primereact/rating";
import ShowPrice from "./ShowPrice";
import SubmitReview from "./SubmitReview";
export default function CourseDetail({buy,addTocart,cdes,ctitle,numberOfStudent,teacher,rate,date,category,feedBack,setFeedback,price,dis}) {
  return (
    <>
      <div className="container max-w-[1280px] mx-auto mt-3 flex flex-row">
        <div className="px-20 w-full flex flex-row mt-3 justify-center ">
          <div className="w-[60%] shadow-2xl rounded-2xl p-5  bg-blue-100 ">
            <div className="pt-8">
              <h2 className="font-bold text-2xl">{ctitle}</h2>
              <p className="text-[1rem] text-[#000]">
                {cdes}
              </p>
            </div>
            <div className="flex flex-row gap-x-10 items-center mt-10">
              <span className="bg-[#5B5B5B] text-[#fff] px-4 py-1 rounded-xl">
                Best Seller
              </span>
              <Rating value={rate} readOnly cancel={false} />
              <span className="font-bold text-blue-600">{numberOfStudent} Student</span>
            </div>
            <p className="mt-3">
              Create by <b>{teacher}</b>
            </p>
            <div className="flex flex-row gap-x-20 text-gray-700 mt-5">
              <span className="flex flex-row gap-x-5 items-center">
                <i className="pi pi-calendar"></i>Last Update {date}
              </span>
              <span className="flex flex-row gap-x-5 items-center">
                <i className="pi pi-th-large"></i>{category}
              </span>
            </div>
          </div>
          <div className="flex flex-col shadow-2xl rounded-2xl">
            {/* <img src="" alt="" /> */}
            <div className="w-[320px] h-[170px] bg-blue-600 mb-5 rounded-2xl"></div>
            <div className="text-2xl ml-6 mb-5">
              <ShowPrice price={price} discountPercent={dis} />
            </div>
            <div className="flex flex-col px-10 items-center gap-y-5 w-[320px] ">
              <button
                style={{ width: "100%", height: "45px" }}
                className="bg-[#2A0073] text-white hover:cursor-pointer rounded-2xl"
              >
                Buy
              </button>
              <button
                style={{ width: "100%", height: "45px" }}
                className="bg-[#fff] text-[#2A0073] border-1 border-black hover:cursor-pointer hover:bg-[#2A0073] hover:text-white rounded-2xl"
              >
                Add to card
              </button>
              <p className="text-center mb-5">
                30-Day Money-Back Guarantee Full Lifetime Access
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] mx-auto mt-3 px-5">
        <div className="flex flex-row justify-between mt-10">
          <div className="w-[700px] h-[455px] overflow-scroll bg-blue-50 p-5">
              <h3>Feed Back</h3>
              <FeedBackComponent />
          </div>
          <div className="" >
            <h3 className="text-xl mb-5">Submit Your Review</h3>
            <SubmitReview />
          </div>
        </div>
        <h3 className="text-2xl font-bold my-5" >Top Education offer and deal are list here</h3>
        <div className="relate course flex flex-row gap-x-5">
          
        </div>
      </div>
    </>
  );
  function FeedBackComponent() {
    return (
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-semibold">{"Phy Vathanak"}</p>
            <Rating
              value={5}
              readOnly
              cancel={false}
              style={{ fontSize: "1.2rem" }}
            />
          </div>
          <div className="ml-auto flex items-center text-gray-400 text-sm">
            {"Jan-11-2025"}
          </div>
        </div>
        <p className="text-gray-500 mt-2">
          {"This is the best course which i had have study"}
        </p>
      </div>
    );
  }
}
