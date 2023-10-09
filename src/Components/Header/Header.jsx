/* eslint-disable react/no-unescaped-entities */
import Social from "../Social/Social";

const Header = () => {
  return (
    <div className="flex justify-center mt-28">
      <div className="text-left mx-auto">
        <h2 className="font-normal text-lg lg:font-medium lg:text-xl">
          -----GAMING EVENTS
        </h2>
        <h1 className="font-semibold lg:font-bold text-4xl lg:text-5xl py-4">
          Let's Join Our <br />
          ESport Gaming <br />
          Events
        </h1>
      </div>
      <div className="flex-none">
        <Social></Social>
      </div>
    </div>
  );
};

export default Header;
