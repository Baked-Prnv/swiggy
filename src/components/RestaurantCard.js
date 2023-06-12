import { imgCDN, restrauntList } from "../constants";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, deliveryTime}) => {
    return (
        <div className=" w-56 p-3 m-2 shadow-md hover:bg-orange-50 hover:shadow-xl">
            <img src= {imgCDN + cloudinaryImageId} />
            <h2 className=" font-bold text-center font-sans text-xl">{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{deliveryTime} mins away</h2>
        </div>
    );
};

export default RestaurantCard;