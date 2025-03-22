import React from "react";

export default function DetailDashBoard() {
  return (
    <div className=" space-y-4 max-w-md">
      {/* Intelliboard */}
      <div className="border rounded-lg p-4 shadow-sm w-[380px] h-[140px]">
        <h2 className="font-bold">Intelliboard</h2>
        <ul className="mt-2 space-y-1">
          <li className="flex items-center space-x-2">
            <i style={{ color: "#565656" }} className="pi pi-gauge "></i>
            <a style={{ color: "#2E4496" }} href="#" className= "hover:underline"  >
              Learner Dashboard
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <i style={{ color: "#565656" }} className="pi pi-caret-up "></i>

            <a style={{ color: "#2E4496" }} href="#" className= "hover:underline">
              Competency Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* Intellicart */}
      <div className="border rounded-lg p-4 shadow-sm w-[380px] h-[140px]">
        <h2 className="font-bold">Intellicart</h2>
        <div className="mt-2 flex items-center space-x-2">
          <i style={{ color: "#565656" }} className="pi pi-search"></i>
          <a style={{ color: "#2E4496" }} href="#" className= "hover:underline" >
            Intellicart
          </a>
        </div>
      </div>

      {/* Messages */}
      <div className="border rounded-lg p-4 shadow-sm w-[380px] h-[140px]">
        <h2 className="font-bold">Messages</h2>
        <p className="text-gray-600">You have no messages.</p>
        <div className="flex flex-col gap-y-2 justify-end space-x-4 mt-2 text-[#2E4496] text-sm">
          <a href="#" className="hover:underline ml-auto">
            Refresh
          </a>
          <a href="#" className="hover:underline flex items-center ml-auto">
            View my messages
            <i style={{ color: "#565656" }} className="pi pi-envelope ml-2 "></i>
          </a>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="border rounded-lg p-4 shadow-sm w-[380px] h-[140px]">
        <h2 className="font-bold">Forum posts</h2>
        <p className="text-gray-600">You have no relevant forum posts.</p>
        <div className="flex flex-col gap-y-2 justify-end space-x-4 mt-2 text-[#2E4496] text-sm">
          <a href="#" className="hover:underline ml-auto">
            Refresh
          </a>
          <a href="#" className="hover:underline flex items-center ml-auto">
            View my forum posts
            <i className="pi pi-envelope ml-2 text-gray-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
