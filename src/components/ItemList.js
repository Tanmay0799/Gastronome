const imgLink =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 ,m-2  border-purple-100 border-b-2 text-left flex "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shahow-lg ">
                Add +
              </button>
            </div>
            <img src={imgLink + item.card.info.imageId} className="w-full " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
