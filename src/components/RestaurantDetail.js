const RestaurantDetail = ( {restaurant} ) => {
    
    return (
        <>
        <div className=" text-sm p-1 m-1 text-gray-500">
            <span>Home / HSR Layout / </span>
            <span className=" text-gray-700 font-bold">{restaurant?.name}</span>
        </div>
        <div className=" ml-4 mr-4">
            <div className=" pt-4 mb-4">
                <div className=" mr-4 inline-block">
                    <div>
                        <p className=" text-xl font-semibold mb-2">{restaurant?.name}</p>
                        <p className=" text-sm text-gray-600 mb-1">{restaurant?.cuisines?.join(", ")}</p>
                        <p className=" text-sm text-gray-600 mb-1">{restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString}</p>
                    </div>
                </div>
                <button className=" border-solid border rounded p-2 float-right bg-transparent cursor-pointer">
                    <span className=" text-green-700 border-b font-semibold block mb-2">
                        <span>★ {restaurant?.avgRatingString}</span>
                    </span>
                    <span>{restaurant?.totalRatingsString}</span>
                </button>
            </div>
            <hr className=" border-b mb-4"></hr>
            <div className=" mb-4 block">
                <ul className=" text-gray-800 font-extrabold text-base">
                    <li className=" inline-block mr-6">
                        <span className=" align-middle">🕑 {restaurant?.sla?.slaString}</span>
                    </li>
                    <li className=" inline-block mr-6">
                        <span className=" align-middle">{restaurant?.costForTwoMessage}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" block">
            <div className=" ml-4 mr-4">
                <div className=" font-normal text-xs text-gray-500">
                    {restaurant?.veg == "1" ? <span>🌿 PURE VEG</span> : <span>🔴 NON VEG</span>}
                </div>
                <hr className=" border-b mt-4 mb-8"></hr>
            </div>
        </div>
        </>
    );
};

export default RestaurantDetail;