import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_DATA_API_URL } from './../config';

const RestaurantDetails = () => {
    const id = useParams();
    const [restData, setRestData] = useState()
    async function getRestaurantInfo() {
        const data = await fetch(`${REST_DATA_API_URL}${id}`)
        const json = data;
        setRestData(json);
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])
    console.log(id)
    return (
        <>
            <h1>Restaurant details for {id}</h1>
        </>
    )
}

export default RestaurantDetails;