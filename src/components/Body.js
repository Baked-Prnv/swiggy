import { restaurantListAPI } from "../constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        getRestaurants();                   // API call
    }, []);

    async function getRestaurants() {
        const data = await fetch(restaurantListAPI);
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null;           // Not render component -> early return 

    // const isOnline = useOnlineStatus();
    if (!useOnlineStatus()) {
        return <h2>🔴 You're Offline❗️ Please check your internet connection...</h2>
    }

    return (allRestaurants?.length == 0) ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" 
                        placeholder="Search" value={searchText}
                        onChange={ (e) => {
                            setSearchText(e.target.value);
                        }}>
                </input>
                <button className="search-btn"
                        onClick={() => {
                            // console.log(allRestaurants);
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data);
                            // console.log("changed")
                        }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map( (restaurant) => {
                    return (
                        <Link 
                            to={"/restaurant/"+restaurant.data.id}
                            key={restaurant.data.id}
                        ><RestaurantCard {...restaurant.data}  />
                        </Link>
                    )
                })}
            </div>
        </>
        
    );
};

export default Body;