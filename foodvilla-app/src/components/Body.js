import RestaurantCard from "./RestaurantCard";
import { useCallback, useEffect, useRef, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import { filterData } from '../utils/helper';
import useGetRestaurants from "../utils/useGetRestaurants";


const Body = () => {
    const [searchText, setSearchText] = useState("");

    // Custom hook to call the API which get Restaurants
    // Which helps make code look very clean and readable
    // It returns the restaurantList, setRestaurantList, filteredRestList, setFilteredRestList, errMsg
    const [resultsFound, restaurantList, setRestaurantList, filteredRestList, setFilteredRestList, errMsg, setOffset, loading, setLoading, hasMore] = useGetRestaurants();

    const observer = useRef();
    const lastRestaurant = useCallback((node) => {
        // 
        // if loading return
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {

                setOffset(prevOffset => prevOffset + 31);
            }
        })
        if (node) observer.current.observe(node)
    })
    const filterRestaurant = () => {
        if (restaurantList.length > 0) {
            setLoading(true);
            const data = filterData(searchText, restaurantList);
            setFilteredRestList(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        const i = setTimeout(() => {
            if (searchText?.length >= 0) {

                filterRestaurant();
                window.scrollTo(0, 0);
            }
        }, 1000);
        return () => {
            clearInterval(i);
        }
    }, [searchText])


    return (
        errMsg && !loading ? (errMsg.includes("location") ?
            <div className="flex justify-center text-center pt-72 font-bold text-2xl h-screen w-auto text-red-400" >
                {errMsg}
            </div> :
            <div className="flex justify-center items-center font-bold text-2xl h-screen w-auto" >
                Something went wrong < br />
                Please try after sometime
            </div>
        ) :
            (restaurantList.length === 0 && errMsg === "") ?
                <Shimmer type={"restaurant-list"} /> :
                <>
                    <div className="sticky top-0 bg-white z-20 flex justify-between items-center mb-10 border border-b-gray-200">
                        {
                            searchText?.length > 0 ?
                                <div className="font-semibold text-2xl ml-10">
                                    <span className="text-3xl">{filteredRestList.length}</span> Restaurants found
                                </div>
                                :
                                <div className="font-semibold text-2xl ml-10">
                                    <span className="text-3xl">{resultsFound}</span> Restaurants around you
                                </div>
                        }

                        <div className="flex gap-2 mr-8 mt-6 mb-6">
                            <input data-testid="search" className="border w-72 p-2 rounded-md" type="text" name="search" id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                            <button className="border p-2 bg-gray-200 rounded-md" data-testid="search-btn" onClick={filterRestaurant}>Search</button>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-24 min-h-[68vh] mb-8' data-testid="restaurant-list">
                        {
                            (filteredRestList.length === 0 && searchText) ? <h2 className="font-bold text-2xl">No restaurant found</h2> :
                                filteredRestList?.map((rest, index) => {
                                    return (filteredRestList.length === index + 1 && (searchText?.length === 0)) ?
                                        <Link ref={lastRestaurant} to={`/info/${rest.data.id}`} key={rest.data.id + "_" + index} >
                                            <RestaurantCard {...rest.data} />
                                        </Link> :
                                        <Link to={`/info/${rest.data.id}`} key={rest.data.id + "_" + index} >
                                            <RestaurantCard {...rest.data} />
                                        </Link>
                                })
                        }
                    </div>
                    {
                        loading && <Shimmer type={"restaurant-next-list"} />
                    }
                </>
    )
}

export default Body;