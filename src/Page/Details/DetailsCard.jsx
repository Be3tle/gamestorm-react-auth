/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const DetailsCard = ({ card }) => {
  const { id, title, image, description2 } = card || {};

  return (
    <div className="mt-10">
      <div key={id} className="flex justify-center items-center ">
        <div className="relative">
          <img src={image} className="w-[1080px] rounded-md" alt="Your Image" />
        </div>
      </div>

      <div className="flex flex-col text-left w-[1080px] mx-auto">
        <h5 className="text-2xl font-bold pt-10 pb-5">{title}</h5>
        <p className="">{description2}</p>
        <button className="btn bg-blue-500 text-white font-bold my-2 w-40">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
