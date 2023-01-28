import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import { filterData } from '../utils/helper';
import useGetRestaurants from "../utils/useGetRestaurants";


const Body = () => {
    const [searchText, setSearchText] = useState("");

    // Custom hook to call the API which get Restaurants
    // Which helps make code look very clean and readable
    // It returns the restaurantList, setRestaurantList, filteredRestList, setFilteredRestList, errMsg
    const [restaurantList, setRestaurantList, filteredRestList, setFilteredRestList, errMsg] = useGetRestaurants();

    // COMPONENT RENDER HIERARCHY
    // RENDER -> NO DEPENDENCY ARRAY -> EMPTY DEPENDENCY -> SEARCH TEXT DEPENDENCY
    useEffect(() => {
        console.log("NO DEPENDENCY ARRAY");
    });

    useEffect(() => {
        console.log("SearchText dep");
    }, [searchText]);

    console.log("RENDER");

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
                                        <Link to={`/info/${rest.data.id}`} key={rest.data.id}>
                                            <RestaurantCard {...rest.data} />
                                        </Link>
                                    )
                                })
                        }
                    </div>
                </>
    )
}

export default Body;