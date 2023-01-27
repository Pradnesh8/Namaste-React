import { useState, useEffect } from 'react';
import { REST_API_URL } from '../config';
const useGetRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);

    async function getRestaurants() {
        try {
            const data = await fetch(`${REST_API_URL}`);
            const json = await data.json();
            setRestaurantList(json.data.cards[2].data.data.cards);
            setFilteredRestList(json.data.cards[2].data.data.cards);
        }
        catch (error) {
            setErrMsg(error.message);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    return [restaurantList, setRestaurantList, filteredRestList, setFilteredRestList];

}

export default useGetRestaurants;