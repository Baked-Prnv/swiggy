import { useParams } from "react-router-dom";
import { imgCDN } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [ restaurant, restaurantMenu ] = useRestaurantMenu(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    };
 
    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
            <div>
            <h2>RestaurantId : {resId}</h2>
            <h1>{restaurant?.name}</h1>
            <img src={imgCDN + restaurant?.cloudinaryImageId} />
            <h2>{restaurant?.areaName}</h2>
            <h2>{restaurant?.sla?.deliveryTime}mins Away.</h2>
            <h2>{restaurant?.costForTwoMessage}</h2>
            <h2>{restaurant?.avgRating}🤩 Stars</h2>
            {/* {console.log(restaurantMenu)} */}
            </div>
            <div>
                <h2 className=" text-xl font-extrabold text-orange-400 p-1 m-1">Menu</h2>
                <ul>
                    {(restaurantMenu?.card?.itemCards).map( (item) => (
                        <li key={item?.card?.info?.id}
                            className="m-1 p-1 ">
                            {item?.card?.info?.name} 
                        <button className="p-1 m-1 bg-orange-300 rounded-lg" 
                                onClick={() => addFoodItem(item?.card?.info)}>
                                Add
                                </button>
                        </li>
                    ))}
                </ul>
                {console.log(restaurantMenu?.card?.itemCards[1]?.card?.info?.name)}
            </div>
        </div>
    );
};

export default RestaurantMenu;