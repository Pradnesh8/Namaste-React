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
    // return null when data is not present
    if (!restData) {
        return null;
    }
    return (
        // TODO : SEARCH box
        // TODO : pages
        // TODO : veg/nonveg icon
        // TODO : sort by price/category
        <div className="flex items-start">
            <img className="h-[85vh] w-auto ml-5 flex-1" src={CDN_IMG_URL + restData?.cloudinaryImageId} alt={restData?.name} />
            <div className="ml-8 flex-1">
                <div className="text-2xl font-medium">
                    {restData?.name}
                </div>
                <div className="font-normal">
                    {new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(restData?.cuisines)}
                </div>
                <div className="flex items-center gap-2 mb-2.5 font-medium">
                    <div className="flex items-center gap-1">
                        <img src={starIcon} alt="star-icon" className="h-5" /> {restData?.avgRating}
                    </div>
                    <div className="cost-for-two">
                        {restData?.costForTwoMsg}
                    </div>
                </div>
                <div className="text-xl font-medium">Menu</div>
                <div className="max-h-[70vh] overflow-y-auto">
                    {Object.values(restData?.menu?.items)?.map((menu_item) => {
                        return (
                            <div className="flex justify-between" key={menu_item.id}>
                                <div className="item-name">
                                    {menu_item.name}
                                </div>
                                <div className="pr-2">
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