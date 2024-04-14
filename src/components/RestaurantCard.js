import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg mb-4 bg-purple-100 ">
      <div>
        <img className="w-full" src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <hr />
        <h4 className="text-gray-700 text-base mb-2">{cuisines.join(", ")}</h4>
        <h4 className="avg-rating">
          <span>{avgRating}⭐</span>
        </h4>
        <h4 className="text-gray-700 text-base"> {costForTwo}</h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <h4>{deliveryTime}</h4>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
