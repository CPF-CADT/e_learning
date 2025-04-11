import { useState } from "react";
import { Link } from "react-router-dom";
import CourseCartSell from "./CourseCartSell";

export default function ShoppingCart({ cart,setCart,setNumCart }) {
  // Create local state for the cart to handle removals

  // Remove an item from the cart by its index
  const removeItem = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
    setNumCart((prev)=>prev-1);
  };

  // Calculate total price from the cart items
  const totalPrice = cart.reduce((acc, item) => acc + item.price*(1-item.discountPercent/100), 0);

  return (
    <div className="max-w-[1270px] mx-auto">
      <h2 className="font-bold text-3xl text-[#414458]">Shopping Cart</h2>
      {cart.length === 0 && (
        <div className="text-[#414458]">
          <h3 className="font-bold text-lg text-[#414458] mt-5">
            0 Course in Cart
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg"
              alt="Empty Cart"
              className="w-64"
            />
            <p>Your cart is empty. Keep shopping to find a course!</p>
            <Link
              className="py-4 px-4 bg-blue-600 flex items-center rounded-2xl text-white font-bold mt-5"
              to="/course"
            >
              Keep Shopping
            </Link>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex flex-row justify-between gap-10">
          <div className="w-[75%]">
            <h3 className="text-lg font-bold mt-5">
              {cart.length} Course{cart.length > 1 && "s"} in Cart
            </h3>
            {cart.map((item, index) => (
              <CourseCartSell
                key={index}
                pimg={item.courseImage}
                ptitle={item.courseTitle}
                prate={item.star}
                price={item.price}
                pdis={item.discountPercent}
                duration={item.courseDuration}
                onRemove={() => removeItem(index)}
              />
            ))}
          </div>
          <div className="w-[25%] h-[200px] bg-white p-4 rounded-xl shadow-md mt-12 flex flex-col">
            <div className="mb-4">
              <h2 className="text-lg text-gray-600 font-semibold">Total:</h2>
              <p className="text-3xl font-bold text-gray-800">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <Link
              to="/checkout"
              className="w-[80%] bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg inline-block transition-colors duration-200"
            >
              Proceed to Checkout <i className="pi pi-arrow-right"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
