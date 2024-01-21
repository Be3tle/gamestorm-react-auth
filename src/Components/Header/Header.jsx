/* eslint-disable react/no-unescaped-entities */
import Social from '../Social/Social';

const Header = () => {
  const headerStyle = {
    backgroundImage: 'url("https://i.postimg.cc/wMtQDJjh/gaming-courses.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  };

  return (
    <div className="flex justify-center items-center px-5" style={headerStyle}>
      <div className="text-left mx-auto text-white">
        <h2 className="font-normal text-base lg:font-medium lg:text-xl">
          -----GAMING EVENTS
        </h2>
        <h1 className="font-semibold lg:font-bold text-3xl lg:text-5xl py-4">
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
