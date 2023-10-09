import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";

const BookNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle booking
    console.log("Booking submitted!");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-16">
          Book Now for Upcoming Events
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventChoice"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Event
            </label>
            <select
              id="eventChoice"
              name="eventChoice"
              className="border p-2 w-full"
              required
            >
              <option value="event1">Call of Duty: Modern Warfare</option>
              <option value="event2">Counter Strike: Global Offensive</option>
              <option value="event3">GTA V</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookNow;
