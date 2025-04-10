import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartCard = ({ itemCount }) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md relative hover:cursor-pointer">
      <div className="relative">
        <FaShoppingCart size={28} color="#3b82f6"/>
        {itemCount > 0 && (
          <div className="absolute top-[-5px] right-[-10px] bg-purple-600 rounded-full w-5 h-5 flex justify-center items-center">
            <span className="text-white font-bold text-xs">{itemCount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCard;
