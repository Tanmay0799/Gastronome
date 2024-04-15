import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;

  return (
    <div className="m-2 p-4 w-[250px] h-[600px] bg-purple-100 rounded-xl hover:bg-purple-200">
      <img className=" rounded-md h-60" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold text-xl mb-2 py-4">{name}</h3>

      <h4 className="text-gray-700 text-base mb-2">{cuisines.join(", ")}</h4>
      <h4 className="avg-rating">
        <span>{avgRating}⭐</span>
      </h4>
      <h4 className="text-gray-700 text-base py-2"> {costForTwo}</h4>
      <h4 className="py-4 font-bold">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
