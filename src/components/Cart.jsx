import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import BasicCourseCartSell from './BasicCourseCartSell'; // adjust path as needed

const CartCard = ({ cartItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md hover:cursor-pointer">
        <FaShoppingCart size={24} color="#3b82f6" />
        {cartItems.length > 0 && (
          <div className="absolute top-[-5px] right-[-10px] bg-purple-600 rounded-full w-5 h-5 flex justify-center items-center">
            <span className="text-white font-bold text-xs">{cartItems.length}</span>
          </div>
        )}
      </div>

      {/* Hover dropdown preview */}
      {isHovered && cartItems.length > 0 && (
        <div className="absolute top-12 right-0 z-20 w-[320px] bg-white border rounded-xl shadow-lg p-3 max-h-[400px] overflow-y-auto">
          {cartItems.map((item, index) => (
            <BasicCourseCartSell
              key={index}
              pimg={item.courseImage}
              ptitle={item.courseTitle}
              price={item.price}
              dis={item.discountPercent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartCard;
