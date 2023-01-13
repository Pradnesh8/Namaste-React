import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA } from "../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = RESTAURANT_DATA.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    });
    return filterData;
}

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(RESTAURANT_DATA);
    const [searchText, setSearchText] = useState("")
    return (
        <>
            <div className="search-box">
                <input type="text" name="search" id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    console.log("search", searchText);
                    const data = filterData(searchText, restaurantList);
                    console.log("data", data);
                    setRestaurantList(data);
                }}>Search</button>
            </div>
            <div className='restaurant-list'>
                {
                    restaurantList.map((rest) => {
                        return (
                            // Key must be unique
                            // ...rest.data - sends the data as props it spreads all values of rest object
                            <RestaurantCard {...rest.data} key={rest.data.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;