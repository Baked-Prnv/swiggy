export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter( (restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log("filtered data : "+ filterData);
    return filterData;
};