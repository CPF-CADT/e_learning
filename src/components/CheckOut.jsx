import { useState } from "react";
import BasicCourseCartSell from "./BasicCourseCartSell";
import { useNavigate } from "react-router-dom";
import khqr from '../assets/qrcode.jpg'

export default function CheckOut({ cart,setMyCourse,setCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card"); // Add payment method state
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.cardNumber.trim() &&
      formData.expiry.trim() &&
      formData.cvc.trim()
    );
  };

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const keyMap = {
      "Name on Card": "name",
      "Card Number": "cardNumber",
      "Expiration Date (MM/YY)": "expiry",
      CVC: "cvc",
    };
    const key = keyMap[placeholder];
    if (key) {
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (1 - item.discountPercent / 100),
    0
  );
  function checkPayment() {
    let paymentProcess = true;
    if (paymentProcess) {
      const myNewCourse = [];
      cart.map((item) => {
        myNewCourse.push({
          cimg: item.courseImage,
          courseTitle: item.courseTitle,
          courseHook: item.courseDescription,
          progress: 0,
          favourite: false,
        });
      });
      setMyCourse((prevCourses) => [...prevCourses, ...myNewCourse]);
      setCart([])
      navigate("/success");
    }
  }
  
  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Payment</h1>

        <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Checkout Form */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Checkout</h2>

            {/* Payment method selection */}
            <div className="flex justify-start">
              <div className="flex bg-white border border-gray-300 rounded-full overflow-hidden w-max shadow-inner">
                <button
                  className={`px-6 py-2 font-medium transition-all duration-300 ${
                    paymentMethod === "card"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                      : "text-black bg-white"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  Credit Card
                </button>
                <button
                  className={`px-6 py-2 font-medium transition-all duration-300 ${
                    paymentMethod === "khqr"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                      : "text-black bg-white"
                  }`}
                  onClick={() => setPaymentMethod("khqr")}
                >
                  KHQR
                </button>
              </div>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === "card" && (
              <>
                <div>
                  <p className="mb-2 font-medium text-gray-700">Card Type</p>
                  <div className="flex gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      alt="PayPal"
                      className="w-12 h-8 object-contain"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
                      alt="AMEX"
                      className="w-12 h-8 object-contain"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Visa"
                      className="w-12 h-8 object-contain"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      alt="Mastercard"
                      className="w-12 h-8 object-contain"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Name on Card"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  onChange={handleChange}
                  value={formData.cardNumber}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration Date (MM/YY)"
                    onChange={handleChange}
                    value={formData.expiry}
                    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    onChange={handleChange}
                    value={formData.cvc}
                    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>

                <label className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Save my information for faster checkout</span>
                </label>
                <button
                  disabled={paymentMethod === "card" && !isFormValid()}
                  onClick={checkPayment}
                  style={{
                    padding: "12px",
                    opacity:
                      paymentMethod === "card" && !isFormValid() ? 0.5 : 1,
                    cursor:
                      paymentMethod === "card" && !isFormValid()
                        ? "not-allowed"
                        : "pointer",
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
                >
                  Pay {totalPrice}$
                </button>
              </>
            )}

            {/* KHQR Payment Option */}
            {paymentMethod === "khqr" && (
              <div className="text-center space-y-4" onClick={checkPayment}>
                <p className="font-medium text-gray-700">
                  Scan KHQR with your banking app:
                </p>
                <img
                  src={khqr}
                  alt="KHQR Code"
                  className="mx-auto w-48 h-48 object-contain border border-gray-300 p-2 rounded"
                />
                <p className="text-sm text-gray-500">
                  Ensure the amount and merchant name are correct before
                  confirming payment.
                </p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Summary</h2>
            {cart.map((item, index) => (
              <BasicCourseCartSell
                key={index}
                pimg={item.courseImage}
                ptitle={item.courseTitle}
                price={item.price}
                dis={item.discountPercent}
              />
            ))}
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Coupon Discount</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
