import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // console.log(resId);
  // fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=243625"
    );
    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

// 243625
