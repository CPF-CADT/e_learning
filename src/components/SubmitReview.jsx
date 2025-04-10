import { useState } from "react";
import { Rating } from "primereact/rating";

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style
export default function SubmitReview({ review, addRevew }) {
  const [value, setValue] = useState(null);
  return (
    <form className="flex flex-col p-5 w-full bg-white rounded shadow-md">
      <h4 className="text-xl font-semibold mb-4">Add Your Rating</h4>
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Rating
        </label>
        <Rating value={value} onChange={(e) => setValue(e.value)} />
      </div>
      <div className="mb-4">
        <label
          htmlFor="text_review"
          className="block text-sm font-medium text-gray-700"
        >
          Review
        </label>
        <textarea
          name="my_text"
          id="text_review"
          placeholder="Write your review here!"
          rows="6"
          cols="40"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 bg-amber-400 text-white font-semibold py-1 px-2 hover:cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
