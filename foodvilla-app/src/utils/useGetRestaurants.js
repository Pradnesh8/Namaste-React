import { useState, useEffect } from 'react';
import { REST_API_OFFSET_URL, REST_API_URL } from '../config';
const useGetRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [resultsFound, setResultsFound] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    async function getRestaurants() {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const data = await fetch(`${REST_API_URL}&lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
                const json = await data.json();
                if (json.data) {
                    setResultsFound(json.data.cards[2].data?.data?.totalRestaurants)
                    setRestaurantList(json.data.cards[2].data?.data?.cards);
                    setFilteredRestList(json.data.cards[2].data?.data?.cards);
                    setErrMsg("");
                }
            } catch (e) {
                setErrMsg(e.message);
                setLoading(false)
            }
        }, (err) => {
            setErrMsg("You have blocked Foodiewoodie from tracking your location. To use this app, change your location settings in browser.")
        });
        setLoading(false);
    }
    async function getMoreRestaurants() {
        setLoading(true);
        try {
            const data = await fetch(`${REST_API_OFFSET_URL}${offset}`);
            const json = await data.json();
            if (offset >= json.data.totalSize) setHasMore(false)
            console.log("old", restaurantList, [...json.data.cards.map(_d => _d.data)]);
            const formattedList = [...json.data.cards.map(_d => _d.data)]
            setRestaurantList(prevRestList => [...prevRestList, ...formattedList]);
            setFilteredRestList(prevRestList => [...prevRestList, ...formattedList]);
            console.log("new", restaurantList, filteredRestList);
        }
        catch (error) {
            setErrMsg(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    useEffect(() => {
        console.log("IN", offset)
        offset > 0 && getMoreRestaurants();
    }, [offset, hasMore]);

    return [resultsFound, restaurantList, setRestaurantList, filteredRestList, setFilteredRestList, errMsg, setOffset, loading, setLoading, hasMore];

}

export default useGetRestaurants;