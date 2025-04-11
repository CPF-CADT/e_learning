import { useState } from "react";
import { Link } from "react-router-dom";
export default function UserProfile({ UserName, ProfilePath, positionTop }) {
  const [toggle, setToggle] = useState(false);

  // Toggle dropdown visibility
  function dropDown() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div className="usrProfileSide relative ">
      <span
        onClick={dropDown}
        className="text-black flex flex-row items-center hover:cursor-pointer "
      >
        {UserName}
        <i
          className={`pi pi-${toggle ? "chevron-up" : "chevron-down"} ml-3`}
        ></i>
        <img
          className="user-profile"
          src={ProfilePath}
          alt="user profile"
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
        />
      </span>

      <div
        className="profile-right-side absolute bg-[#fff] p-5 rounded-xl "
        style={{
          top: positionTop,
          left: "0",
          display: toggle ? "block" : "none",
          zIndex: 10, // E
        }}
      >
        <ul>
          <li>
            <Link to="/user-detail">
              Profile <i className="pi pi-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/my-courses">
              Course <i className="pi pi-th-large"></i>
            </Link>
          </li>
          <li>
            <Link to="/messages">
              Message <i className="pi pi-envelope"></i>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              Setting <i className="pi pi-cog"></i>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              Order <i className="pi pi-cart-plus"></i>
            </Link>
          </li>
          <li>
            <Link to="/help">
              Help <i className="pi pi-info-circle"></i>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              Log out <i className="pi pi-sign-out"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
