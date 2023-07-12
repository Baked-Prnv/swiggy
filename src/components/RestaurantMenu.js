import { useParams } from "react-router-dom";
import { imgCDN } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Recommended from "./Recommended";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [ restaurant, restaurantMenu ] = useRestaurantMenu(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    };
 
    return (!restaurant) ? <Shimmer /> : (
        <div>
            <div className=" max-md max-w-3xl block mr-auto ml-auto mt-5">
                {/* <RestaurantDetail restaurant /> */}
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
                {/* restaurantDetails ends here */}
                <div className=" block">
                    <div className=" ml-4 mr-4">
                        <div className=" font-normal text-xs text-gray-500">
                            {restaurant?.veg == "1" ? <span>🌿 PURE VEG</span> : <span>🔴 NON VEG</span>}
                        </div>
                        <hr className=" border-b mt-4 mb-8"></hr>
                    </div>
                </div>
                <div>
                    <div className=" mt-6 ml-4 mb-4 mr-2">
                        <button className=" mb-6 bg-transparent">
                            <h3 className=" font-bold text-l">Recommended</h3>
                        </button>
                        {/* -------recommended menu starts from here------ */}
                        {(restaurantMenu).map( (item) => (
                            /* * */
                            <div className=" pt-4 mb-4">
                                <div className=" mr-4 inline-block">
                                    <div>
                                        <p className=" text-xl font-semibold mb-2">{item?.card?.info?.name}</p>
                                        <p className=" text-sm font-semibold text-gray-900 mb-1">₹{item?.card?.info?.price/100}</p>
                                        <p className=" text-sm text-gray-600 mb-1">{item?.card?.info?.description?.substring(0,80)}...</p>
                                    </div>
                                </div>
                                <button className=" border-solid border rounded p-2 float-right bg-transparent"
                                        onClick={() => addFoodItem(item?.card?.info)}>
                                    <div className=" text-green-700 border-b font-semibold block mb-2">
                                        <img width="100" height="90" src={imgCDN + item?.card?.info?.imageId} />
                                    </div>
                                    <div className=" content-center">
                                        <div className=" text-center">Add</div>
                                    </div>
                                </button>
                                <hr className=" border-b mt-4 mb-8"></hr>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>       
    );
};

export default RestaurantMenu;