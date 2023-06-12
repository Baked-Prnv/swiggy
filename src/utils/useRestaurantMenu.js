import { useState, useEffect } from "react";
import { restaurantMenuAPI } from "../constants";

const useRestaurantMenu = (resId) => {
    const [ restaurant, setRestaurant ] = useState(null);
    const [ restaurantMenu, setRestaurantMenu ] = useState(null);

    useEffect( () => {
        getRestaurantinfo();
    },[]);

    async function getRestaurantinfo() {
        const data = await fetch(restaurantMenuAPI+resId);
        const jsonData = await data.json();
        
        setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card);


    }
    return [restaurant, restaurantMenu];
}

export default useRestaurantMenu;