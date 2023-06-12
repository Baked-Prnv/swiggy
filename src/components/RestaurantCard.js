import { imgCDN, restrauntList } from "../constants";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, deliveryTime}) => {
    return (
        <div className="card">
            <img src= {imgCDN + cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{deliveryTime} mins away</h2>
        </div>
    );
};

export default RestaurantCard;