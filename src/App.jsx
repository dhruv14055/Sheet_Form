import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    rating: "10",
    Thoughts: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwG83WGSmzW3oh7N4-TByidPtQ5ezSrpskgKyHAYj5apzeBlbt2SOcRdHkiKZTdoWqZUA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            Like_Most: formData.question1,
            Improvements: formData.question2,
            Rating: formData.rating,
            Overall: formData.Thoughts,
          }),
        }
      );

      alert("Feedback submitted successfully....!!");
      setFormData({ question1: "", question2: "", rating: "10", Thoughts: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check the console for details.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://wallpaperaccess.com/full/4521429.jpg)" }}
    >
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg bg-opacity-90 backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Question 1 */}
          <div>
            <label className="block text-lg font-medium">
              1. What did you like the most ?
            </label>
            
            <input
              type="text"
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              placeholder="Type your answer..."
              className="w-full mt-2 p-2 border rounded-md focus:outline-blue-500"
              required
            />
          </div>

                    {/* Question 2 */}
          <div>
            <label className="block text-lg font-medium">
              2. What improvements do you suggest ?
            </label>

            <input
              type="text"
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              placeholder="Type your answer..."
              className="w-full mt-2 p-2 border rounded-md focus:outline-blue-500"
              required
            />
          </div>

                    {/* Rating */}
          <div>
            <label className="block text-lg font-medium">
              3. Rate us (1-10) :
            </label>

            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full mt-2 p-2 border rounded-md focus:outline-blue-500"
              required
            />
          </div>

                  {/* Thoughts */}
          <div>
            <label className="block text-lg font-medium">
              4. Write overall feedback ....
            </label>

            <textarea
              name="Thoughts"
              value={formData.Thoughts}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              className="w-full mt-2 p-2 border rounded-md focus:outline-blue-500"
              required
            ></textarea>
          </div>

                     {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-black cursor-pointer flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
                Submitting...
              </>
            ) : ("SUBMIT")
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

