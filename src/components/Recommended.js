import { imgCDN } from "../constants";
const Recommended = (item) => {
    return (
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
    );
};

export default Recommended;