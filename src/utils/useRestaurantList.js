import { useState, useEffect } from "react";
import { restaurantListAPI } from "../constants";

const useRestauranList = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect( () => {
        getRestaurants();                   // API call
    }, []);

    async function getRestaurants() {
        const data = await fetch(restaurantListAPI);
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurants, jsonData];
}

export default useRestauranList;