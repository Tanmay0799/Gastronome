import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(setListOfRestaurants);
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder=""
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        {/* <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants?.filter(
              (res) => parseFloat(res.data.avgRating) > 4
            );

            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button> */}
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestaurants?.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            to={"/restaurants/" + restaurant?.data?.id}
          >
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
