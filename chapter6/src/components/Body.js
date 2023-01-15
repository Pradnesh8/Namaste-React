import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    });
    return filterData;
}

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errMsg, setErrMsg] = useState("");

    // COMPONENT RENDER HIERARCHY
    // RENDER -> NO DEPENDENCY ARRAY -> EMPTY DEPENDENCY -> SEARCH TEXT DEPENDENCY
    useEffect(() => {
        console.log("NO DEPENDENCY ARRAY");
    });

    useEffect(() => {
        console.log("Empty dependency array");
        getRestaurants();
    }, []);

    useEffect(() => {
        console.log("SearchText dep");
    }, [searchText]);

    console.log("RENDER");

    async function getRestaurants() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0218215&lng=73.0907&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestaurantList(json.data.cards[2].data.data.cards);
            setFilteredRestList(json.data.cards[2].data.data.cards);
        }
        catch (error) {
            setErrMsg(error.message);
        }
    }
    // RETURN NULL WHEN API is fetching data
    // if (filteredRestList.length === 0) {
    //     return null
    // }

    return (
        errMsg ? <div>Something went wrong <br /> Please try after sometime</div> :
            (restaurantList.length === 0 && errMsg === "") ?
                <Shimmer /> :
                <>
                    <div className="search-box">
                        <input type="text" name="search" id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button className="search-btn" onClick={() => {
                            const data = filterData(searchText, restaurantList);
                            setFilteredRestList(data);
                        }}>Search</button>
                    </div>
                    <div className='restaurant-list'>
                        {
                            (filteredRestList.length === 0 && searchText) ? <h2>No restaurant found</h2> :
                                filteredRestList?.map((rest) => {
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