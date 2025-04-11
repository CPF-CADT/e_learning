import { CheckCircle } from "lucide-react"; // optional, uses lucide icons
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/mycourse"); // go back to homepage or your courses
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase! A confirmation email has been sent to you.</p>

        <button
          style={{padding:'12px', width:'180px'}}
          onClick={handleGoBack}
          className="bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-semibold rounded-lg transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
