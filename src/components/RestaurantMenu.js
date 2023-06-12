import { useParams } from "react-router-dom";
import { imgCDN } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [ restaurant, restaurantMenu ] = useRestaurantMenu(resId);
 
    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
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
                <h2>Menu</h2>
                <ul>
                    {(restaurantMenu?.card?.itemCards).map( (item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
                {console.log(restaurantMenu?.card?.itemCards[1]?.card?.info?.name)}
            </div>
        </div>
    );
};

export default RestaurantMenu;