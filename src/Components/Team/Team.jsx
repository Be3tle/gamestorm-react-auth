/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    // main container
    <div className="flex justify-center items-center flex-col bg-gray-100">
      <p className="pt-24 pb-1">Events Class</p>
      <h1 className="text-2xl font-bold mb-7">Let's Join Your Team</h1>
      <hr className="w-16 text-center h-1 bg-blue-400 mb-4" />

      {/* card container */}
      <div data-aos="zoom-in" className="grid grid-cols-3 mb-7">
        {/* card 1 */}
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1 className="text-xl font-semibold py-2">Junior Class</h1>
          <hr className=" h-0.5 bg-blue-300" />
          <ul className="menu  w-56 p-2 [&_li>*]:rounded-none text-left my-2">
            <li>0 - 2 Winner Rate</li>
            <li>Open For New Team</li>
            <li>Easy Battle</li>
            <li>Certificate</li>
          </ul>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white m-1">
            View Events
          </button>
        </div>

        {/* card 2 */}
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1 className="text-xl font-semibold py-2">Middle Class</h1>
          <hr className=" h-0.5 bg-blue-300" />
          <ul className="menu  w-56 p-2 [&_li>*]:rounded-none text-left my-2">
            <li>3 - 6 Winner Rate</li>
            <li>Open For New Team</li>
            <li>Easy Battle</li>
            <li>Certificate</li>
          </ul>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white m-1">
            View Events
          </button>
        </div>

        {/* card 3 */}
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1 className="text-xl font-semibold py-2">Expert Class</h1>
          <hr className=" h-0.5 bg-blue-300" />
          <ul className="menu  w-56 p-2 [&_li>*]:rounded-none text-left my-2">
            <li>More 10+ Winner Rate</li>
            <li>High Class Team</li>
            <li>Super Battle</li>
            <li>Certificate</li>
          </ul>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white m-1">
            View Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
