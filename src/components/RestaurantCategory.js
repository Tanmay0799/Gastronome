import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* {Header} */}
      <div className="mx-auto my-4 w-6/12 bg-purple-50 shahdow-lg p-4  justify-between">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* {accordion body} */}
    </div>
  );
};

export default RestaurantCategory;
