import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL, REST_DATA_API_URL } from './../config';
import starIcon from './../../assets/star-icon.png';
const RestaurantDetails = () => {
    const { id } = useParams();
    const [restData, setRestData] = useState()
    async function getRestaurantInfo() {
        const data = await fetch(`${REST_DATA_API_URL}${id}`)
        const json = await data.json();
        console.log("data", json)
        setRestData(json.data);
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])
    console.log(id)
    if (!restData) {
        return null
    }
    return (
        <div className="restaurant-details">
            <img className="restaurant-img" src={CDN_IMG_URL + restData?.cloudinaryImageId} alt={restData?.name} />
            <div className="restaurant-info-sect">
                <div className="restaurant-name">
                    {restData?.name}
                </div>
                <div className="cuisines">
                    {new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(restData?.cuisines)}
                </div>
                <div className="cost-and-rating">
                    <div className="rating">
                        <img src={starIcon} alt="star-icon" className="icon star-icon" /> {restData?.avgRating}
                    </div>
                    <div className="cost-for-two">
                        {restData?.costForTwoMsg}
                    </div>
                </div>
                <div className="menu-header">Menu</div>
                <div className="menu">
                    {Object.values(restData?.menu?.items)?.map((menu_item) => {
                        return (
                            <div className="menu-item" key={menu_item.id}>
                                <div className="item-name">
                                    {menu_item.name}
                                </div>
                                <div className="item-price">
                                    ₹{menu_item.price / 100}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails;