import { FaNewspaper } from 'react-icons/fa';
import { MdSupportAgent, MdPlayCircleFilled } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className="my-20 px-20">
      <p>Find Answers To All Your Questions</p>
      <h1 className="text-2xl font-bold mb-10 mt-2">Got A Problem?</h1>
      <div
        data-aos="slide-down"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="flex">
          <FaNewspaper className="text-9xl text-blue-500" />
          <div className="ml-4 text-left">
            <h2 className="text-2xl font-semibold">Detailed Document</h2>
            <p className="mt-2 text-justify">
              Our documentation is as thorough as possible. Each template option
              is detailed and easy to follow.
            </p>
          </div>
        </div>
        <div className="flex">
          <MdSupportAgent className="text-9xl text-blue-500" />
          <div className="ml-4 text-left">
            <h2 className="text-2xl font-semibold">Premium Support</h2>
            <p className="mt-2 text-justify">
              We offer a dedicated & friendly support, We will try to reply as
              fast as we can. We will be in touch. Good luck!
            </p>
          </div>
        </div>
        <div className="flex">
          <MdPlayCircleFilled className="text-9xl text-blue-500" />
          <div className="ml-4 text-left">
            <h2 className="text-2xl font-semibold">Video Tutorials</h2>
            <p className="mt-2 text-justify">
              Watch our video tutorials, step by step instructions to set up the
              Template. We have separated with video tutorials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
