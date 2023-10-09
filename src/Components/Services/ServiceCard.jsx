/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const { id, title, image, description } = card || {};
  return (
    <div>
      <Link to={`/service/${id}`} state={title}>
        <div key={id} className="mb-4">
          <div
            className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
          >
            <div>
              <img className="w-full rounded-t-lg" src={image} alt="" />
            </div>

            <div className="p-2 text-left">
              <h5 className="text-lg font-bold my-2">{title}</h5>
              <p className="font-normal">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
