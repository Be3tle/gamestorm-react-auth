/* eslint-disable react/prop-types */
import ServiceCard from "./ServiceCard";

const Services = ({ cards }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="pt-28 pb-1">E - Sports Gaming</p>
      <h1 className="text-2xl font-bold mb-7">We Do E - Sport Gaming</h1>

      <hr className="w-16 text-center h-1 bg-blue-400 mb-4" />
      <div className="md:grid grid-cols-1 lg:grid-cols-3 gap-7 mx-auto">
        {cards?.map((card) => (
          <ServiceCard key={card.id} card={card}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
